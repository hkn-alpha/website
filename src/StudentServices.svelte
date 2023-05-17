<script>
  import Nav from "./components/Nav.svelte";
  import { reviewSessions, crammingCarnival } from "./content/review_sessions";
</script>

<!--
    Need: class, time, location, slides, recording
-->
<div class="container">
  <Nav />
  <div class="content">
    <h1>Student Services</h1>
    <p>Filler text about services that HKN offers.</p>
    {#each Object.keys(reviewSessions) as mtNum}
      <h1>Midterm {mtNum} Review Sessions</h1>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Time</th>
            <th>Location</th>
            <th>Materials</th>
            <th>Recording</th>
          </tr>
        </thead>
        <tbody>
          {#each reviewSessions[mtNum] as session}
            <tr>
              <td>
                {session.course}
              </td>
              <td>
                {session.time}
              </td>
              <td>
                {session.location}
              </td>
              <td>
                {#if session.slidesLink && session.worksheetLink}
                  <a href={session.slidesLink}>Slides</a> &amp;
                  <a href={session.worksheetLink}>Worksheet</a>
                {:else if session.slidesLink}
                  <a href={session.slidesLink}>Slides</a>
                {:else if session.worksheetLink}
                  <a href={session.worksheetLink}>Worksheet</a>
                {:else}
                  Coming soon!
                {/if}
              </td>
              <td>
                {#if session.recordingLink}
                  <a href={session.recordingLink}>Recording</a>
                {:else}
                  N/A
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/each}

    {#if crammingCarnival.length > 0}
      <h1>Cramming Carnival</h1>
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
  }

  .content {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    max-width: 100vw;
  }

  table {
    width: 100%;
    color: white;
  }

  tr {
    border-bottom: 2px solid white;
    padding-top: 4px;
    padding-bottom: 2px;
  }

  p {
    font-size: 20px;
    color: white;
  }
</style>
