<script>
  import Event from "./Event.svelte";
  export let events;

  let events2 = events.filter(x => x != undefined).sort((a, b) => {
    if (a.date - b.date == 0) {
      if (
        a.time.toLowerCase().includes("am") &&
        b.time.toLowerCase().includes("pm")
      ) {
        return -1;
      } else if (
        a.time.toLowerCase().includes("pm") &&
        b.time.toLowerCase().includes("am")
      ) {
        return 1;
      } else {
        return a.time.localeCompare(b.time);
      }
    } else {
      return a.date - b.date;
    }
  });

  function daysDiff(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  function checkDate(e) {
    return new Date() <= new Date(e.date.getTime() + 60 * 60 * 24 * 1000);
  }

  export let cutoffCount = 5;
  export let cutoffDays = 14;
  export let maxCount = 10;

  let showAll = false;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const dateOptions = { month: "long", day: "numeric" };

  let showPoints = false;
</script>

<div class="evcontainer">
  {#if events2
    .filter(checkDate)
    .filter((e, i) => i < cutoffCount || (daysDiff(new Date(), e.date) <= cutoffDays && i < maxCount) || showAll).length > 0}
    <div class="initiate-points-toggler">
      <p>
        <label for="initiatepoints">Show initiate points?</label>
        <input type="checkbox" bind:checked={showPoints} id="initiatepoints" />
      </p>
    </div>
    {#each events2
      .filter(checkDate)
      .filter((e, i) => i < cutoffCount || (daysDiff(new Date(), e.date) <= cutoffDays && i < maxCount) || showAll) as event}
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
    {#if events2
      .filter(checkDate)
      .filter((e, i) => i < cutoffCount || (daysDiff(new Date(), e.date) <= cutoffDays && i < maxCount) || showAll).length < events2.filter(checkDate).length}
      <div class="show_more">
        <label for="showtoggle">Show All</label>
        <input
          type="checkbox"
          id="showtoggle"
          style="display: none;"
          bind:checked={showAll}
        />
      </div>
    {/if}
  {:else}
    <div class="no-events2">Nothing scheduled, check back soon!</div>
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

  .no-events2 {
    font-style: italic;
    text-align: center;
  }

  label {
    user-select: none;
    cursor: pointer;
  }

  input[type="checkbox"] {
    cursor: pointer;
    margin-right: 0px;
  }

  .show_more {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }

  @media only screen and (min-width: 600px) {
    .show_more {
      margin-bottom: -45px;
    }
  }

  .show_more label {
    display: block;
    color: #0f2040 !important;
    text-decoration: none !important;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 22px;
    cursor: pointer;
    z-index: 125;
  }
</style>
