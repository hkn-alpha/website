<script>
  export let sessions;
</script>

<div class="table-container">
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
      {#each sessions as session}
        <tr>
          <td>
            {session.course}
          </td>
          <td>
            {session.time}
          </td>
          <td>
            {#if session.location.startsWith("http")}
              <a href={session.location}>Zoom</a>
            {:else}
              {session.location}
            {/if}
          </td>
          <td>
            {#if session.slidesLink && session.worksheetLink}
              <a href={session.slidesLink}>Slides</a>
              {#if session.scribblesLink}
                (<a href={session.scribblesLink}>Scribbles</a>)
              {/if}&amp;
              <a href={session.worksheetLink}>Worksheet</a>
              {#if (session.keyLink && !session.keyReleaseTime) || (session.keyLink && new Date(session.keyReleaseTime) <= new Date(Date.now()))}
                (<a href={session.keyLink}>Key</a>)
              {/if}
            {:else if session.slidesLink}
              <a href={session.slidesLink}>Slides</a>
              {#if session.scribblesLink}
                (<a href={session.scribblesLink}>Scribbles</a>)
              {/if}
            {:else if session.worksheetLink}
              <a href={session.worksheetLink}>Worksheet</a>
              {#if (session.keyLink && !session.keyReleaseTime) || (session.keyLink && new Date(session.keyReleaseTime) <= new Date(Date.now()))}
                (<a href={session.keyLink}>Key</a>)
              {/if}
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
</div>

<style>
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
</style>
