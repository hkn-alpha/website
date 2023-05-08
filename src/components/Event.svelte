<script>
  import { compile } from "mdsvex";
  export let name;
  export let date;
  export let description;
  export let time;
  const id = Math.random() * 100000; // algorithms are my passion
</script>

<div class="event">
  <input type="checkbox" id={`ev-check-${id}`} class="toggler" />
  <label for={`ev-check-${id}`}>
    <div class="event-header">
      <h2>{name}</h2>
      <h4>{date} @ {time}</h4>
    </div>
  </label>
  <div class="event-description ev-d-1">
    <iframe
      width="100%"
      height="300px"
      src="https://api.mapbox.com/styles/v1/ryanziegler/clhfgmq2a00h901p65igq3ssf.html?title=false&access_token=pk.eyJ1IjoicnlhbnppZWdsZXIiLCJhIjoiY2s2aTdoc3BpMm95bjNncnpueG94MjZ0ciJ9.aVHaBJ7HB65jkQMiSthkEA&zoomwheel=false#17/40.1103786/-88.2311247"
      title="Streets"
      style="border:none;"
    />
    <div class="event-description-words">
      <div class="event-description-location">
        <span class="location-name">Legends Bar and Grill</span><br />
        <span class="location-address">
          522 E Green St<br />
          Champaign, IL 61820
        </span>
      </div>
      <div class="event-description-body">
        {description}
      </div>
    </div>
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

  @media only screen and (min-width: 650px) {
    .event-description-words {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }

  @media only screen and (max-width: 650px) {
    .event-description-body {
      margin-top: 10px;
    }
  }

  .location-name {
    font-weight: 600;
    font-size: 18px;
  }
  .event-description-words {
    margin-top: 10px;
  }
</style>
