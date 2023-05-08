<script>
  import Event from "./components/Event.svelte";
  import Nav from "./components/Nav.svelte";
  import events from "./content/events";

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
</script>

<div class="container">
  <Nav />
  <div class="evcontainer">
    {#each events as event}
      <Event
        name={event.name}
        description={event.description}
        date={event.date.toLocaleDateString(undefined, dateOptions)}
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

  .container {
    background-color: #0f2040;
    min-height: 100vh;
  }
</style>
