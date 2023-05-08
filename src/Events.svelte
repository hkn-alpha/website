<script>
  import Event from "./components/Event.svelte";
  import Nav from "./components/Nav.svelte";

  let events = [
    {
      name: "HKN Elections",
      date: new Date(Date.UTC(2023, 3, 29, 3, 0, 0)),
      description: "Vote for Alex Zhang (I'm not biased)",
    },
    {
      name: "CS374 Review Session",
      date: new Date(Date.UTC(2023, 4, 3, 3, 0, 0)),
      description: "CS374 kids will feel happy and prepared",
    },
    {
      name: "CS374 Exam",
      date: new Date(Date.UTC(2023, 4, 4, 3, 0, 0)),
      description: "CS374 kids will cry.",
    },
  ];

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
