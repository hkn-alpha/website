<script>
  import Event from "./Event.svelte";
  export let events;

  function daysDiff(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  export let cutoffCount = 5;
  export let cutoffDays = 14;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const dateOptions = { month: "long", day: "numeric" };

  const currentEvents = events
    .filter((e) => new Date() <= e.date)
    .filter(
      (e, i) => i < cutoffCount || daysDiff(new Date(), e.date) <= cutoffDays
    );

  let showPoints = false;
</script>

<div class="evcontainer">
  {#if currentEvents.length > 0}
    <div class="initiate-points-toggler">
      <p>
        <label for="initiatepoints">Show initiate points?</label>
        <input type="checkbox" bind:checked={showPoints} id="initiatepoints" />
      </p>
    </div>
    {#each currentEvents as event}
      <Event
        name={event.name}
        description={event.description}
        date={event.date.toLocaleDateString(undefined, dateOptions)}
        time={event.time}
        locationInfo={!event.virtual ? event.locationInfo : undefined}
        virtualInfo={event.virtual ? event.virtualInfo : undefined}
        initiatePointsCategory={event.initiatePointsCategory}
        initiatePointsNumber={event.initiatePointsCount}
        showInitiatePoints={showPoints}
      />
    {/each}
  {:else}
    <div class="no-events">Nothing scheduled, check back soon!</div>
  {/if}
</div>

<style>
  .evcontainer {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 100;
  }

  p {
    font-size: 18px;
    color: white;
  }

  .initiate-points-toggler {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .initiate-points-toggler p {
    margin-top: 0px;
    margin-bottom: -9px;
  }

  .no-events {
    font-style: italic;
    text-align: center;
  }

  label {
    user-select: none;
    cursor: pointer;
  }

  input[type="checkbox"] {
    cursor: pointer;
  }
</style>
