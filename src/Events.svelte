<script>
  import Event from "./components/Event.svelte";
  import Nav from "./components/Nav.svelte";
  import events from "./content/events";

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  const currentEvents = events.filter((e) => new Date() <= e.date);
</script>

<div class="container">
  <Nav />
  <div class="evcontainer">
    <h1>Upcoming Events</h1>
    <p>
      This is some text about the events that HKN hosts. HKN events are probably
      fun. Click an event to see more details, such as location.
    </p>
    {#each currentEvents as event}
      <Event
        name={event.name}
        description={event.description}
        date={event.date.toLocaleDateString(undefined, dateOptions)}
        time={event.time}
        locationInfo={!event.virtual ? event.locationInfo : undefined}
        virtualInfo={event.virtual ? event.virtualInfo : undefined}
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
</style>
