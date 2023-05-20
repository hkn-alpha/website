<script>
  import Nav from "./components/Nav.svelte";
  import ReviewsCalendar from "./components/ReviewsCalendar.svelte";
  import { reviewSessions, crammingCarnival } from "./content/review_sessions";
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
      Wow, this website is finally taking shape.
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
</style>
