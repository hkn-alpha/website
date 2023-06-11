<script>
  import { LeafletMap, TileLayer, Marker } from "svelte-leafletjs";

  const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const tileLayerOptions = {
    minZoom: 0,
    maxZoom: 20,
    maxNativeZoom: 19,
  };

  let leafletMap;
  export let name;
  export let date;
  export let description;
  export let time;
  export let locationInfo = undefined;
  export let virtualInfo = undefined;
  export let initiatePointsNumber = undefined;
  export let initiatePointsCategory = undefined;
  export let showInitiatePoints = false;
  const id = Math.random() * 100000; // algorithms are my passion
</script>

<div class="event">
  <input type="checkbox" id={`ev-check-${id}`} class="toggler" />
  <label for={`ev-check-${id}`}>
    <div class="event-header">
      <div class="event-title">
        <h2>{name}</h2>
        {#if initiatePointsNumber && initiatePointsCategory && showInitiatePoints}
          <div class="initiate-points-container">
            <div class="initiate-points-count">
              <div>
                {initiatePointsNumber}
              </div>
            </div>
            <div class="initiate-points-category">
              {initiatePointsCategory}
            </div>
          </div>
        {/if}
      </div>
      <div class="event-right">
        <h4 class="datetime">{date} @ {time}</h4>
        <div class="chevron-arrow-container">
          <div class="plus" />
        </div>
      </div>
    </div>
  </label>
  <div class="event-description ev-d-1">
    {#if locationInfo}
      <div class="example" style="height: 300px;">
        <LeafletMap
          bind:this={leafletMap}
          options={{ center: [locationInfo.lat, locationInfo.lon], zoom: 18 }}
        >
          <TileLayer url={tileUrl} options={tileLayerOptions} />
          <Marker latLng={[locationInfo.lat, locationInfo.lon]} />
        </LeafletMap>
      </div>
      <div class="event-description-words post-map">
        <a href={locationInfo.googleMapsLink}>
          <div class="event-description-location">
            <span class="location-name">{locationInfo.locationName}</span><br />
            <span class="location-address">
              {locationInfo.addressLine1}<br />
              {locationInfo.addressLine2}
            </span>
          </div>
        </a>
        <div class="event-description-body">
          {description}
        </div>
      </div>
    {:else}
      <div
        class={!virtualInfo.meetingPasscode
          ? "event-description-words"
          : "event-description-words small-padded-description"}
      >
        <div
          class={!virtualInfo.meetingPasscode
            ? "event-description-meeting standalone-button"
            : "event-description-meeting"}
        >
          <div class="meeting-join">
            <a href={virtualInfo.meetingJoinUrl} class="event-join-btn"
              >Join {virtualInfo.meetingPlatform}</a
            >
          </div>
          {#if virtualInfo.meetingPasscode}
            <div class="meeting-passcode">
              <span>Passcode: {virtualInfo.meetingPasscode}</span>
            </div>
          {/if}
        </div>
        <div
          class={!virtualInfo.meetingPasscode
            ? "event-description-body"
            : "event-description-body adjusted-up"}
        >
          {description}
        </div>
      </div>
    {/if}
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
    font-family: 'Schibsted Grotesk', Arial, Helvetica, sans-serif;
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
    align-items: center;
    justify-content: space-between;
  }

  .event h2,
  .event h4 {
    user-select: none;
  }

  @media only screen and (min-width: 650px) {
    .event-description-words {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }

    .meeting-passcode {
      margin-top: 15px;
    }
  }

  @media only screen and (max-width: 450px) {
    .event-title {
      flex-direction: column !important;
    }

    .initiate-points-container {
      margin-left: 0px !important;
      margin-bottom: 7px;
    }
  }

  @media only screen and (max-width: 650px) {
    .event-description-body {
      margin-top: 10px;
    }

    .event-description-meeting {
      display: flex;
      flex-direction: row;
      margin-bottom: 17px;
    }

    .meeting-passcode {
      margin-left: 5px;
    }
  }

  .location-name {
    font-weight: 600;
    font-size: 18px;
  }
  .post-map {
    margin-top: 10px;
  }

  .event-join-btn {
    background-color: white;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 17px;
    padding-right: 17px;
    border-radius: 50px;
    color: #0f2040;
    text-decoration: none;
    font-size: 18px;
  }

  .standalone-button {
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .small-padded-description {
    margin-top: 7px;
  }

  .event-title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .initiate-points-container {
    margin-left: 10px;
    background-color: #fff;
    border-radius: 25px;
    padding: 4px;
    display: flex;
    flex-direction: row;
  }

  .initiate-points-count {
    background-color: #0f2040;
    border-radius: 25px;
    width: 20px;
    display: flex;
    justify-content: center;
    user-select: none;
  }
  .initiate-points-count div {
    margin-left: -1.5px;
  }

  .initiate-points-category {
    margin-left: 8px;
    color: #0f2040;
    text-transform: capitalize;
    padding-right: 6px;
    user-select: none;
  }

  .event-description-location {
    color: white !important;
  }

  a {
    text-decoration: none !important;
  }

  .datetime {
    align-self: flex-end;
  }

  .event-right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .chevron-arrow-container {
    width: 12px;
    margin-left: 6px;
    margin-right: 3px;
    transition-duration: 0.2s;
  }

  .chevron-arrow {
    display: inline-block;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    width: 9px;
    height: 9px;
    transform: rotate(135deg);
    transition-duration: 0.2s;
  }

  .toggler:checked ~ label .chevron-arrow {
    transform: rotate(45deg);
    transition-duration: 0.2s;
  }

  .toggler:checked ~ label .chevron-arrow-container {
    /* margin-top: -4px; */
    transition-duration: 0.2s;
  }

  .plus {
    display: inline-block;
    width: 20px;
    height: 20px;

    background: linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
    background-position: center;
    background-size: 50% 2px, 2px 50%; /*thickness = 2px, length = 50% (25px)*/
    background-repeat: no-repeat;
    transition-duration: 0.2s;
    margin-top: 3px;
  }

  .toggler:checked ~ label .plus {
    transform: rotate(-45deg);
    width: 23px;
    height: 23px;
    margin-left: -2px;
    transition-duration: 0.3s;
    margin-top: 3px;
  }
</style>
