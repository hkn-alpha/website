<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import ReviewsCalendar from "../components/ReviewsCalendar.svelte";
  import {
    reviewSessions,
    crammingCarnival,
    until,
  } from "../content/StudentServices/review_sessions";
  import { tutors as unorderedTutors } from "../content/StudentServices/tutors";
  import Select from "svelte-select";
  import Description from "../content/StudentServices/description.md";
  import Tutoring from "../content/StudentServices/tutoring.md";

  const tutors = unorderedTutors
    .map((x) => ({ v: x, r: Math.random() }))
    .sort((x) => x.r)
    .map((x) => x.v);

  function standardizeClassName(name) {
    return name.toUpperCase().replaceAll(" ", "").replaceAll(",", "");
  }

  function getMatchingTutors(query) {
    const requestedCourses = query.split(",").map(standardizeClassName);
    return tutors.filter((tutor) => {
      const standardizedTutorCourses = tutor.courses
        .split(",")
        .map(standardizeClassName);
      let found = false;
      requestedCourses.forEach((c) => {
        found =
          found ||
          standardizedTutorCourses.includes(c) ||
          standardizedTutorCourses.reduce(
            (v, x) =>
              v ||
              (c.length >= 3 &&
                c[0].toLowerCase() == c[0].toUpperCase() &&
                x.includes(c)),
            false
          );
      });
      return found;
    });
  }

  let query = "";

  let reviewSessionsAvailable = Object.keys(reviewSessions)
    .filter((x) => reviewSessions[x].length > 0)
    .filter((x) => until[x] > new Date());
  let intialSession =
    reviewSessionsAvailable.length == 0 && crammingCarnival.length > 0
      ? "Final Exam"
      : crammingCarnival.length == 0
      ? ""
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

      <h1 id="tutoring">Find a Tutor</h1>
      <div class="instructions md-container">
        <Tutoring />
      </div>
      <input
        class="tutor-search"
        type="text"
        placeholder="Search for courses (comma-separated, e.x. ECE110, ECE120)"
        spellcheck="false"
        bind:value={query}
      />
      {#if getMatchingTutors(query).length > 0}
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
              {#each getMatchingTutors(query) as tutor}
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
    margin-top: 5px;
    padding-left: 23px;
    padding-right: 23px;
  }

  h1 {
    color: white;
    margin-bottom: 5px;
  }

  .content {
    width: 746px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100vw - 20px);
    overflow: hidden;
  }

  @media only screen and (max-width: 800px) {
    .content {
      width: 100vw;
      margin: 0px;
    }
  }

  p,
  .md-container {
    font-size: 19px;
    color: white;
    margin-bottom: 60px;
  }
  a {
    color: white !important;
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
    /* margin-top: -120px; */
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

  a {
    color: white !important;
  }

  .instructions {
    margin-bottom: 15px;
  }

  .needs-query,
  .no-results {
    margin-top: 5px;
    text-align: center;
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
      margin-left: 25px;
    }
  }

  .select {
    margin-right: 8px;
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

  #tutoring {
    text-decoration: none;
  }
</style>
