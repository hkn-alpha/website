<script>
  import { compile } from "mdsvex";
  export let name;
  export let date;
  export let description;
  const id = Math.random() * 100000; // algorithms are my passion
</script>

<div class="event">
  <input type="checkbox" id={`ev-check-${id}`} class="toggler" />
  <label for={`ev-check-${id}`}>
    <div class="event-header">
      <h2>{name}</h2>
      <h4>{date}</h4>
    </div>
  </label>
  <div class="event-description ev-d-1">
    {description}
  </div>
</div>

<style>
  .event {
    color: white;
    width: 100%;
  }

  .toggler {
    display: none;
  }

  .event {
    border-bottom: 3px solid white;
  }

  .event h2 {
    cursor: pointer;
  }

  .ev-d-1 {
    height: 0px;
    overflow: hidden;
    transition-duration: 0.2s;
  }

  .toggler:checked ~ .ev-d-1 {
    height: auto;
    transition-duration: 0.2s;
    padding-bottom: 15px;
  }

  .event-header {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: flex-end;
    justify-content: space-between;
  }

  .event h2 {
    user-select: none;
  }
</style>
