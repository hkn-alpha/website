<script>
  import Nav from "./components/Nav.svelte";
  import ReviewsCalendar from "./components/ReviewsCalendar.svelte";
  import { reviewSessions, crammingCarnival } from "./content/review_sessions";
  import { tutors as unorderedTutors } from "./content/tutors";

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
        found = found || standardizedTutorCourses.includes(c);
      });
      return found;
    });
  }

  let query = "";

  // console.log(query);

  let matchingTutors = query == "" ? getMatchingTutors(query) : null;
</script>

<!--
    Need: class, time, location, slides, recording
-->
<div class="container">
  <Nav />
  <div class="content">
    <h1>Student Services</h1>
    <p>
      Filler text about services that HKN offers. This should probably take up
      at least three lines. More filler text to make this more visually
      appealing. Here is even more filler text to make if even more appealing.
      Wow, this website is finally taking shape. <a href="#tutoring"
        >Jump to tutors</a
      >
    </p>
    {#each Object.keys(reviewSessions) as mtNum}
      {#if reviewSessions[mtNum].length > 0}
        <h1>Midterm {mtNum} Review Sessions</h1>
        <ReviewsCalendar sessions={reviewSessions[mtNum]} />
      {/if}
    {/each}

    {#if crammingCarnival.length > 0}
      <h1>Cramming Carnival</h1>
      <ReviewsCalendar sessions={crammingCarnival} />
    {/if}

    <h1 id="tutoring">Find a Tutor</h1>
    <p class="instructions">
      Need more personalized help? HKN offers free one-on-one peer tutoring.
      Simply enter your class(es) below, and contact a tutor to arrange a time.
    </p>
    <input
      class="tutor-search"
      type="text"
      placeholder="Search for courses (comma-separated, e.x. ECE110, ECE120)"
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
        We couldn't find any tutors. Make sure your course names and numbers are
        correct.
      </p>
    {/if}
  </div>
</div>

<style>
  .container {
    background-color: #0f2040;
    min-height: 100vh;
  }

  h1 {
    color: white;
    margin-bottom: 5px;
  }

  .content {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    max-width: 100vw;
    overflow: hidden;
  }

  p {
    font-size: 20px;
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
    font-family: "Lora";
    font-size: 18px;
    border-bottom: 3px solid #546482;
    /* margin-top: -120px; */
    margin-bottom: 20px;
  }

  .tutor-search::placeholder {
    color: #ddd;
    font-family: "Lora";
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
</style>
