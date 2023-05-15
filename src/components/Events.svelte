<script>
  import Event from "./Event.svelte";
  export let events;
  export let cutoff = 10;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const dateOptions = { month: "long", day: "numeric" };

  const currentEvents = events
    .filter((e) => new Date() <= e.date)
    .filter((_, i) => i < cutoff);

  let showPoints = false;
</script>

<div class="evcontainer">
  <div class="initiate-points-toggler">
    <p>
      Show initiate points? <input type="checkbox" bind:checked={showPoints} />
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
</style>
