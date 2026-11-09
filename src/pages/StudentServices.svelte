<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import ReviewsCalendar from "../components/ReviewsCalendar.svelte";
  import {
    reviewSessions,
    crammingCarnival,
    until,
  } from "../content/StudentServices/review_sessions";
  import { onMount } from "svelte";
  import Description from "../content/StudentServices/description.md";
  import Tutoring from "../content/StudentServices/tutoring.md";
  import { submitTutoringRequest } from "../content/StudentServices/tutoringRequest";
  import { loadTutors } from "../content/StudentServices/tutors";

  let tutors = [];
  let tutorsLoaded = false;
  let query = "";

  onMount(async () => {
    try {
      const loaded = await loadTutors();
      tutors = loaded
        .map((x) => ({ v: x, r: Math.random() }))
        .sort((x, y) => x.r - y.r)
        .map((x) => x.v);
    } catch (e) {
      console.error("Error loading tutors:", e);
    } finally {
      tutorsLoaded = true;
    }
  });

  function standardizeClassName(name) {
    return name.toUpperCase().replaceAll(" ", "").replaceAll(",", "");
  }

  function courseMatchesTutorCourses(course, tutorCourses) {
    const c = standardizeClassName(course);
    if (!c) return false;
    return (
      tutorCourses.includes(c) ||
      tutorCourses.some(
        (x) => c.length >= 3 && /^\d/.test(c) && x.includes(c)
      )
    );
  }

  function courseHasTutor(course) {
    return tutors.some((tutor) =>
      courseMatchesTutorCourses(
        course,
        tutor.courses.split(",").map(standardizeClassName)
      )
    );
  }

  function getMatchingTutors(query) {
    const requestedCourses = query.split(",").map(standardizeClassName);
    return tutors.filter((tutor) => {
      const standardizedTutorCourses = tutor.courses
        .split(",")
        .map(standardizeClassName);

      return requestedCourses.some((c) =>
        courseMatchesTutorCourses(c, standardizedTutorCourses)
      );
    });
  }

  $: matchingTutors =
    query && tutors.length > 0 ? getMatchingTutors(query) : [];

  let name = "";
  let courses = "";
  let email = "";
  let availability = "";
  let honeypot = "";
  let status = "idle";
  let errorMessage = "";

  const RATE_LIMIT_KEY = "hkn-tutoring-request-last-sent";
  const RATE_LIMIT_MS = 30000;

  function lastSubmissionTime() {
    try {
      return parseInt(localStorage.getItem(RATE_LIMIT_KEY)) || 0;
    } catch {
      return 0;
    }
  }

  function recordSubmission() {
    try {
      localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
    } catch {
      // Private browsing or blocked storage; the rate limit is best-effort
    }
  }

  $: courseTokens = courses
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c.length > 0);
  $: coursesWithTutors = courseTokens.filter((c) => courseHasTutor(c));
  $: coursesWithoutTutors = courseTokens.filter((c) => !courseHasTutor(c));
  $: canSubmitCourses = tutorsLoaded && coursesWithTutors.length > 0;
  $: courseCheckMessage = (() => {
    if (!courses.trim()) return "";
    if (!tutorsLoaded) return "Checking availability...";
    const parts = [];
    if (coursesWithTutors.length > 0) {
      parts.push(
        coursesWithTutors.length === 1
          ? `A tutor is available for ${coursesWithTutors[0]}.`
          : `Tutors are available for ${coursesWithTutors.join(", ")}.`
      );
    }
    if (coursesWithoutTutors.length > 0) {
      parts.push(
        `No tutors listed for ${coursesWithoutTutors.join(", ")}.`
      );
    }
    return parts.join(" ");
  })();
  $: courseCheckOk =
    coursesWithTutors.length > 0 && coursesWithoutTutors.length === 0;
  $: courseCheckPartial =
    coursesWithTutors.length > 0 && coursesWithoutTutors.length > 0;

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!courses.trim())
      return "Please enter the course(s) you need help with.";
    if (!canSubmitCourses)
      return "Please enter a course that has a tutor listed before sending a request.";
    if (!/^[^\s@]+@illinois\.edu$/i.test(email.trim()))
      return "Please enter your Illinois email (ending in @illinois.edu).";
    if (!availability.trim()) return "Please let us know when you're free.";
    if (Date.now() - lastSubmissionTime() < RATE_LIMIT_MS)
      return "You just sent a request. Please wait a moment before sending another.";
    return "";
  }

  async function handleSubmit() {
    if (honeypot) return;

    errorMessage = validate();
    if (errorMessage) {
      status = "error";
      return;
    }

    status = "submitting";
    try {
      await submitTutoringRequest({
        name: name.trim(),
        courses: courses.trim(),
        email: email.trim(),
        availability: availability.trim(),
      });
      recordSubmission();
      name = "";
      courses = "";
      email = "";
      availability = "";
      status = "success";
    } catch (e) {
      errorMessage =
        "We couldn't send your request. Please try again, or email us using the link on our homepage.";
      status = "error";
    }
  }

  let reviewSessionsAvailable = Object.keys(reviewSessions)
    .filter((x) => reviewSessions[x].length > 0)
    .filter((x) => until[x] > new Date());

  const validTitles = Object.keys(reviewSessions)
    .filter((x) => reviewSessions[x].length > 0)
    .map((x) => `Midterm ${x}`);

  const items =
    crammingCarnival.length > 0 ? [...validTitles, "Final Exam"] : validTitles;

  let selected =
    reviewSessionsAvailable.length == 0 && crammingCarnival.length > 0
      ? "Final Exam"
      : crammingCarnival.length == 0
        ? `Midterm ${
            Object.keys(reviewSessions)
              .filter((x) => reviewSessions[x].length > 0)
              .filter((x) => until[x] > new Date())
              .sort((a, b) => until[a] - until[b])[0]
          }`
        : `Midterm ${reviewSessionsAvailable[0]}`;

  if (!selected || selected.includes("undefined")) {
    selected = items[0] || "";
  }

  $: activeSessions = selected.startsWith("Midterm")
    ? reviewSessions[parseInt(selected.substring("Midterm ".length))]
    : crammingCarnival;
</script>

<svelte:head>
  <title>Student Services</title>
  <meta
    name="description"
    content="HKN offers review sessions for core ECE courses, and free one-on-one tutoring."
  />
</svelte:head>

<div class="page">
  <Nav />
  <div class="page-body">
    <div class="container">
      <header class="page-header">
        <h1>Student Services</h1>
        <div class="prose">
          <Description />
        </div>
      </header>

      <nav class="section-nav text-tabs" aria-label="On this page">
        <a class="text-action" href="#reviews">Review sessions</a>
        <span class="sep" aria-hidden="true">·</span>
        <a class="text-action" href="#tutoring">Request a tutor</a>
        <span class="sep" aria-hidden="true">·</span>
        <a class="text-action" href="#directory">Tutor directory</a>
      </nav>

      <section id="reviews" class="section">
        <h2>Review sessions</h2>
        {#if items.length > 0}
          <div class="text-tabs" role="group" aria-label="Exam period">
            {#each items as item, i}
              {#if i > 0}
                <span class="sep" aria-hidden="true">·</span>
              {/if}
              <button
                class="text-action"
                type="button"
                aria-pressed={selected === item}
                on:click={() => (selected = item)}
              >
                {item}
              </button>
            {/each}
          </div>
          <ReviewsCalendar sessions={activeSessions} />
        {:else}
          <p class="muted">
            We're still scheduling sessions for this semester, check back soon!
          </p>
        {/if}
      </section>

      <section id="tutoring" class="section">
        <h1>Request a Tutor</h1>
        <div class="prose instructions">
          <Tutoring />
        </div>
        <form class="tutor-form" on:submit|preventDefault={handleSubmit}>
          <input
            class="field honeypot"
            type="text"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
            bind:value={honeypot}
          />
          <label class="label" for="tutor-name">Your name</label>
          <input
            id="tutor-name"
            class="field"
            type="text"
            placeholder="Your name"
            aria-label="Your name"
            autocomplete="name"
            bind:value={name}
          />
          <label class="label" for="tutor-courses"
            >Courses you need tutoring in</label
          >
          <input
            id="tutor-courses"
            class="field"
            class:field-tight={!!courseCheckMessage}
            type="text"
            placeholder="Courses you need tutoring in (e.x. ECE 110, MATH 257)"
            aria-label="Courses you need tutoring in"
            spellcheck="false"
            bind:value={courses}
          />
          {#if courseCheckMessage}
            <p
              class="course-check"
              class:course-check-ok={courseCheckOk}
              class:course-check-partial={courseCheckPartial}
              class:course-check-missing={!canSubmitCourses && tutorsLoaded}
              role="status"
            >
              {courseCheckMessage}
            </p>
          {/if}
          <label class="label" for="tutor-email">Your Illinois email</label>
          <input
            id="tutor-email"
            class="field"
            type="email"
            placeholder="Your Illinois email"
            aria-label="Your Illinois email"
            autocomplete="email"
            inputmode="email"
            spellcheck="false"
            bind:value={email}
          />
          <label class="label" for="tutor-availability"
            >Days and times you're free</label
          >
          <textarea
            id="tutor-availability"
            class="field"
            rows="3"
            placeholder="Days and times you're free (e.x. Mon/Wed after 3pm, Sat mornings)"
            aria-label="Days and times you're free"
            bind:value={availability}
          />
          <button
            class="text-action submit-action"
            type="submit"
            disabled={status === "submitting" || !canSubmitCourses}
          >
            {status === "submitting" ? "Sending..." : "Send request"}
          </button>
        </form>
        {#if status === "success"}
          <p class="form-success">
            Thanks! We've received your request and a tutor will email you soon.
          </p>
        {:else if status === "error"}
          <p class="form-error">{errorMessage}</p>
        {/if}
      </section>

      <section id="directory" class="section">
        <h1 class="tutor-heading">Find a Tutor</h1>
        <p class="instructions muted">
          If you would prefer to contact a tutor directly, here is the list.
        </p>
        <label class="label" for="tutor-search">Search for courses</label>
        <input
          id="tutor-search"
          class="field"
          type="text"
          placeholder="Search for courses (comma-separated, e.x. ECE110, ECE120)"
          aria-label="Search for courses"
          spellcheck="false"
          bind:value={query}
        />
        {#if matchingTutors.length > 0}
          <div class="tutor-cards">
            {#each matchingTutors as tutor}
              <article class="tutor-card">
                <h3>{tutor.name}</h3>
                <a href={`mailto:${tutor.email}`}>{tutor.email}</a>
                <p class="courses muted">{tutor.courses}</p>
              </article>
            {/each}
          </div>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Courses offered</th>
                </tr>
              </thead>
              <tbody>
                {#each matchingTutors as tutor}
                  <tr>
                    <td>{tutor.name}</td>
                    <td
                      ><a href={`mailto:${tutor.email}`}>{tutor.email}</a></td
                    >
                    <td>{tutor.courses}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {:else if query == ""}
          <p class="needs-query muted">Start typing to see results...</p>
        {:else}
          <p class="no-results muted">
            We couldn't find any tutors. Make sure your course names and numbers
            are correct.
          </p>
        {/if}
      </section>
    </div>
  </div>
  <Footer />
</div>

<style>
  .page-header {
    margin-bottom: var(--space-4);
  }

  .page-header h1 {
    margin-bottom: var(--space-4);
  }

  .prose :global(p) {
    margin-bottom: var(--space-4);
  }

  .prose :global(a) {
    color: var(--color-text);
  }

  .prose :global(a:hover) {
    color: var(--color-orange);
  }

  .section-nav {
    position: sticky;
    top: var(--nav-height);
    z-index: 50;
    overflow-x: auto;
    margin: 0 calc(-1 * var(--space-4));
    padding: var(--space-3) var(--space-4);
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    scrollbar-width: none;
    margin-bottom: 0;
  }

  .section-nav::-webkit-scrollbar {
    display: none;
  }

  .section-nav .text-action {
    flex: 0 0 auto;
    white-space: nowrap;
  }

  .section {
    scroll-margin-top: calc(var(--nav-height) + 56px);
  }

  .instructions {
    margin-bottom: var(--space-4);
  }

  .tutor-form {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--space-5);
  }

  .field-tight {
    margin-bottom: var(--space-2);
  }

  .course-check {
    margin: 0 0 var(--space-4);
    font-size: 0.9rem;
    color: var(--color-muted);
  }

  .course-check-ok {
    color: #b8e0c2;
  }

  .course-check-partial {
    color: #ffe0a3;
  }

  .course-check-missing {
    color: var(--color-orange);
  }

  .honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  .submit-action:not(:disabled) {
    text-decoration-color: var(--color-text);
  }

  .submit-action:not(:disabled):hover {
    text-decoration-color: var(--color-orange);
  }

  .form-success {
    color: #b8e0c2;
  }

  .form-error {
    color: var(--color-orange);
  }

  .tutor-cards {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-bottom: var(--space-5);
  }

  .tutor-card {
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    background: var(--color-surface);
    padding: var(--space-4);
  }

  .tutor-card h3 {
    margin-bottom: var(--space-1);
    font-size: 1rem;
  }

  .tutor-card .courses {
    margin: var(--space-2) 0 0;
    font-size: 0.9rem;
  }

  .table-container {
    display: none;
    margin-bottom: var(--space-5);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
  }

  th,
  td {
    text-align: left;
    padding: var(--space-3) var(--space-2);
    border-bottom: 1px solid var(--color-border);
    vertical-align: top;
  }

  th {
    color: var(--color-muted);
    font-weight: 500;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .needs-query,
  .no-results {
    text-align: center;
  }

  @media (min-width: 640px) {
    .tutor-cards {
      display: none;
    }

    .table-container {
      display: block;
      overflow-x: auto;
    }

    .section-nav {
      margin: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
