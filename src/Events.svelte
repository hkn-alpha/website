<script>
  import Event from "./components/Event.svelte";
  import Nav from "./components/Nav.svelte";
  import events from "./content/events";

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  const currentEvents = events.filter((e) => new Date() <= e.date);

  let showPoints = false;
</script>

<div class="container">
  <Nav />
  <div class="evcontainer">
    <h1>Upcoming Events</h1>
    <p>
      HKN regularly hosts events for both members and non-members, ranging from
      tech talks to fun social gatherings like our weekly happy hour. To
      encourange involvement, HKN initiates earn points by attending events.
      Learn more about each event by clicking or tapping it.
    </p>
    <div class="initiate-points-toggler">
      <p>
        Show initiate points? <input
          type="checkbox"
          bind:checked={showPoints}
        />
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
</div>

<style>
  .evcontainer {
    max-width: 650px;
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    color: white;
  }

  p {
    font-size: 18px;
    color: white;
  }

  .container {
    background-color: #0f2040;
    min-height: 100vh;
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
