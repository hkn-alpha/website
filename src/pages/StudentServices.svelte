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
  import Select from "svelte-select";
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
      // Shuffled so the same tutors aren't always contacted first
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

  $: matchingTutors = query && tutors.length > 0 ? getMatchingTutors(query) : [];

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
  $: canSubmitCourses =
    tutorsLoaded && coursesWithTutors.length > 0;
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
  $: courseCheckOk = coursesWithTutors.length > 0 && coursesWithoutTutors.length === 0;
  $: courseCheckPartial = coursesWithTutors.length > 0 && coursesWithoutTutors.length > 0;

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!courses.trim()) return "Please enter the course(s) you need help with.";
    if (!canSubmitCourses)
      return "Please enter a course that has a tutor listed before sending a request.";
    if (!/^[^\s@]+@illinois\.edu$/i.test(email.trim()))
      return "Please enter your Illinois email (ending in @illinois.edu).";
    if (!availability.trim())
      return "Please let us know when you're free.";
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
  let intialSession =
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
  // let selectedSession = Object.keys(reviewSessions).reduce((curr, next) => until[parseInt(next)], Object.keys(reviewSessions)[0])

  const validTitles = Object.keys(reviewSessions)
    .filter((x) => reviewSessions[x].length > 0)
    .map((x) => `Midterm ${x}`);

  const items =
    crammingCarnival.length > 0 ? [...validTitles, "Final Exam"] : validTitles;

  let value = {
    value: intialSession,
    label: intialSession,
  };

  $: value, console.log(value);
</script>

<svelte:head>
  <title>Student Services</title>
  <meta
    name="description"
    content="HKN offers review sessions for core ECE courses, and free one-on-one tutoring."
  />
</svelte:head>

<div class="container">
  <div class="footer-bump">
    <Nav />
    <div class="content">
      <h1 class="ss-heading">Student Services</h1>
      <div class="md-container"><Description /></div>
      {#if items.length > 0}
        <h1 class="styled-select">
          <div class="select">
            <Select
              {items}
              searchable={false}
              showChevron={true}
              clearable={false}
              bind:value
            />
          </div>
          <div class="remainder">Review Sessions</div>
        </h1>
        {#if value.value.startsWith("Midterm")}
          <ReviewsCalendar
            sessions={reviewSessions[
              parseInt(value.value.substring("Midterm ".length))
            ]}
          />
        {:else}
          <ReviewsCalendar sessions={crammingCarnival} />
        {/if}
      {:else}
        <p class="needs-query">
          We're still scheduling sessions for this semester, check back soon!
        </p>
      {/if}

      <h1 id="tutoring">Request a Tutor</h1>
      <div class="instructions md-container">
        <Tutoring />
      </div>
      <form class="tutor-form" on:submit|preventDefault={handleSubmit}>
        <input
          class="tutor-field honeypot"
          type="text"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
          bind:value={honeypot}
        />
        <input
          class="tutor-field"
          type="text"
          placeholder="Your name"
          aria-label="Your name"
          bind:value={name}
        />
        <input
          class="tutor-field"
          class:tutor-field-tight={!!courseCheckMessage}
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
        <input
          class="tutor-field"
          type="email"
          placeholder="Your Illinois email"
          aria-label="Your Illinois email"
          spellcheck="false"
          bind:value={email}
        />
        <textarea
          class="tutor-field"
          rows="3"
          placeholder="Days and times you're free (e.x. Mon/Wed after 3pm, Sat mornings)"
          aria-label="Days and times you're free"
          bind:value={availability}
        />
        <button
          class="tutor-submit"
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

      <h1 class="tutor-heading">Find a Tutor</h1>
      <p class="instructions">
        If you would prefer to contact a tutor directly, here is the list.
      </p>
      <input
        class="tutor-search"
        type="text"
        placeholder="Search for courses (comma-separated, e.x. ECE110, ECE120)"
        aria-label="Search for courses"
        spellcheck="false"
        bind:value={query}
      />
      {#if matchingTutors.length > 0}
        <div class="table-container">
          <table>
            <colgroup>
              <col span="1" style="width: 30%;" />
              <col span="1" style="width: 30%;" />
              <col span="1" style="width: 40%;" />
            </colgroup>
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
                  <td><a href={`mailto:${tutor.email}`}>{tutor.email}</a></td>
                  <td>{tutor.courses}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      {:else if query == ""}
        <p class="needs-query">Start typing to see results...</p>
      {:else}
        <p class="no-results">
          We couldn't find any tutors. Make sure your course names and numbers
          are correct.
        </p>
      {/if}
    </div>
  </div>
  <Footer />
</div>

<style>
  .container {
    background-color: #0f2040;
    min-height: 100vh;
  }

  .content {
    width: 100%;
    max-width: 800px;
    margin: 5px auto 0;
    padding: 0 23px;
    overflow: hidden;
  }

  h1 {
    color: white;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 800px) {
    .content {
      padding: 0 15px;
    }
  }

  p,
  .md-container {
    font-size: 19px;
    color: white;
    margin-bottom: 60px;
    text-align: justify;
  }

  @media only screen and (max-width: 600px) {
    p,
    .md-container {
      font-size: 17px;
    }
  }

  a {
    color: white !important;
  }

  .tutor-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }

  .tutor-field {
    width: 100%;
    box-sizing: border-box;
    background-color: #0f2040;
    border: none;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 2px;
    padding-right: 2px;
    color: white;
    font-family: "Schibsted Grotesk", Arial, Helvetica, sans-serif;
    font-size: 18px;
    border-bottom: 3px solid #546482;
    margin-bottom: 20px;
    resize: vertical;
  }

  .tutor-field::placeholder {
    color: #ddd;
    font-family: "Schibsted Grotesk", Arial, Helvetica, sans-serif;
  }

  .tutor-field-tight {
    margin-bottom: 8px;
  }

  .course-check {
    margin: 0 0 20px;
    font-family: "Schibsted Grotesk", Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: #ddd;
    text-align: left;
  }

  .course-check-ok {
    color: #b8e0c2;
  }

  .course-check-partial {
    color: #ffe0a3;
  }

  .course-check-missing {
    color: #ffb3a1;
  }

  .honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  .tutor-submit {
    align-self: flex-start;
    background-color: #e84a27;
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    font-family: "Schibsted Grotesk", Arial, Helvetica, sans-serif;
    font-size: 18px;
    padding: 10px 24px;
  }

  .tutor-submit:disabled {
    background-color: #546482;
    cursor: default;
  }

  .tutor-search {
    width: 100%;
    background-color: #0f2040;
    border: none;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 2px;
    padding-right: 2px;
    color: white;
    font-family: "Schibsted Grotesk", Arial, Helvetica, sans-serif;
    font-size: 18px;
    border-bottom: 3px solid #546482;
    margin-bottom: 20px;
  }

  .tutor-search::placeholder {
    color: #ddd;
    font-family: "Schibsted Grotesk", Arial, Helvetica, sans-serif;
  }

  table {
    width: 100%;
    color: white;
    border-collapse: collapse;
    margin-bottom: 60px;
    min-width: 700px;
  }

  .table-container {
    overflow-x: scroll;
    scrollbar-width: none;
  }

  .table-container::-webkit-scrollbar {
    display: none;
  }

  tr {
    border-bottom: 2px solid white;
    line-height: 50px;
  }

  thead tr {
    border-bottom: 4px solid white;
  }

  tbody tr:nth-child(even) {
    /** CSS 1-indexes children */
    background-color: #2f3e59;
  }

  td {
    text-align: center;
  }

  .instructions {
    margin-bottom: 15px;
  }

  .needs-query,
  .no-results,
  .form-success,
  .form-error {
    margin-top: 5px;
    text-align: center;
  }

  .form-error {
    color: #ffb3a1;
  }

  @media only screen and (max-width: 457px) {
    .ss-heading {
      margin-top: 80px;
    }
  }

  .styled-select {
    --background: #0f2040;
    --list-background: #0f2040;
    --font-size: 36px;
    --border: none;
    --border-focused: none;
    --border-hover: none;
    --item-hover-bg: #546482;
    --item-first-border-radius: 0px;
    --item-last-border-radius: 0px;
    --item-is-active-bg: #546482;
    --selected-item-padding: 0px;
    --padding: 0px;
    --list-border: 2px solid #546482;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    .styled-select {
      flex-direction: column;
      align-content: center;
    }
    .select {
      margin-bottom: 10px;
    }
  }

  .select {
    cursor: pointer !important;
    text-decoration: underline !important;
    text-decoration-color: #546482 !important;
  }

  .styled-select {
    text-decoration: none;
  }

  .footer-bump {
    min-height: calc(100vh - 70px);
  }

  #tutoring,
  .tutor-heading {
    text-decoration: none;
  }
</style>
