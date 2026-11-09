<script>
  export let sessions;
  $: sortedSessions = [...sessions].sort((s1, s2) =>
    s1.course.localeCompare(s2.course)
  );

  function keyAvailable(session) {
    return (
      (session.keyLink && !session.keyReleaseTime) ||
      (session.keyLink &&
        new Date(session.keyReleaseTime) <= new Date(Date.now()))
    );
  }

  function materialLinks(session) {
    return [
      session.slidesLink && { href: session.slidesLink, label: "Slides" },
      session.scribblesLink && {
        href: session.scribblesLink,
        label: "Scribbles",
      },
      session.worksheetLink && {
        href: session.worksheetLink,
        label: "Worksheet",
      },
      keyAvailable(session) && { href: session.keyLink, label: "Key" },
      session.recordingLink && {
        href: session.recordingLink,
        label: "Recording",
      },
    ].filter(Boolean);
  }
</script>

<div class="reviews">
  <div class="cards">
    {#each sortedSessions as session}
      <article class="session-card">
        <h3>{session.course}</h3>
        <p class="meta">
          <span>{session.time}</span>
          <span class="dot" aria-hidden="true">·</span>
          {#if session.location.startsWith("http")}
            <a href={session.location}>Zoom</a>
          {:else}
            <span>{session.location}</span>
          {/if}
        </p>
        <div class="materials">
          {#if materialLinks(session).length > 0}
            {#each materialLinks(session) as material, i}
              {#if i > 0}
                <span class="sep" aria-hidden="true">·</span>
              {/if}
              <a href={material.href}>{material.label}</a>
            {/each}
          {:else}
            <span class="muted">Coming soon</span>
          {/if}
        </div>
      </article>
    {/each}
  </div>

  <div class="table-wrap">
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
        {#each sortedSessions as session}
          <tr>
            <td>{session.course}</td>
            <td>{session.time}</td>
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
                {#if keyAvailable(session)}
                  (<a href={session.keyLink}>Key</a>)
                {/if}
              {:else if session.slidesLink}
                <a href={session.slidesLink}>Slides</a>
                {#if session.scribblesLink}
                  (<a href={session.scribblesLink}>Scribbles</a>)
                {/if}
              {:else if session.worksheetLink}
                <a href={session.worksheetLink}>Worksheet</a>
                {#if keyAvailable(session)}
                  (<a href={session.keyLink}>Key</a>)
                {/if}
              {:else}
                Coming soon
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
</div>

<style>
  .cards {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-bottom: var(--space-6);
  }

  .session-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    padding: var(--space-4);
  }

  .session-card h3 {
    margin-bottom: var(--space-2);
    font-size: 1.05rem;
  }

  .meta {
    margin: 0 0 var(--space-3);
    color: var(--color-muted);
    font-size: 0.9rem;
  }

  .dot {
    margin: 0 var(--space-1);
  }

  .materials {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-1) 0;
  }

  .materials .sep {
    margin: 0 var(--space-2);
    color: var(--color-border);
  }

  .table-wrap {
    display: none;
    margin-bottom: var(--space-6);
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
    white-space: nowrap;
  }

  th {
    color: var(--color-muted);
    font-weight: 500;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  a {
    color: var(--color-text);
  }

  a:hover {
    color: var(--color-orange);
  }

  @media (min-width: 640px) {
    .cards {
      display: none;
    }

    .table-wrap {
      display: block;
      overflow-x: auto;
    }
  }
</style>
