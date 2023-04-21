<script>
  import Event from "./components/Event.svelte";
  import Nav from "./components/Nav.svelte";

  let events = [
    {
      name: "asdf",
      date: "April 24, 2023",
      description: "Hello world",
    },
    {
      name: "asdf",
      date: "April 25, 2023",
      description: "Hello world",
    },
    {
      name: "asdf",
      date: "April 26, 2023",
      description: "Hello world",
    },
  ];
</script>

<div class="container">
  <Nav />
  <div class="evcontainer">
    {#each events as event}
      <Event
        name={event.name}
        description={event.description}
        date={event.date}
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
