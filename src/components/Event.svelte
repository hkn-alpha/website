<script>
  export let name;
  export let date;
  export let description;
  export let time;
  export let locationInfo = undefined;
  export let virtualInfo = undefined;
  export let initiatePointsNumber = undefined;
  export let initiatePointsCategory = undefined;
  export let showInitiatePoints = false;
  const id = Math.random() * 100000;
</script>

<div class="event">
  <input type="checkbox" id={`ev-check-${id}`} class="toggler" />
  <label for={`ev-check-${id}`}>
    <div class="event-header">
      <div class="event-title">
        <h2>
          {name}
          {#if initiatePointsNumber && initiatePointsCategory && showInitiatePoints}
            <span class="initiate-points">
              {initiatePointsNumber} {initiatePointsCategory}
            </span>
          {/if}
        </h2>
      </div>
      <div class="event-right">
        <h4 class="datetime">{date} @ {time}</h4>
        <span class="plus" aria-hidden="true" />
      </div>
    </div>
  </label>
  <div class="event-description">
    {#if locationInfo}
      <a href={locationInfo.googleMapsLink} class="location">
        <strong>{locationInfo.locationName}</strong><br />
        {locationInfo.addressLine1}<br />
        {locationInfo.addressLine2}
      </a>
      <p>{description}</p>
    {:else if virtualInfo}
      <div class="virtual">
        <a class="text-link" href={virtualInfo.meetingJoinUrl}
          >Join {virtualInfo.meetingPlatform}</a
        >
        {#if virtualInfo.meetingPasscode}
          <p class="muted">Passcode: {virtualInfo.meetingPasscode}</p>
        {/if}
      </div>
      <p>{description}</p>
    {:else}
      <p>{description}</p>
    {/if}
  </div>
</div>

<style>
  .event {
    border-bottom: 1px solid var(--color-border);
  }

  .toggler {
    display: none;
  }

  .event-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3);
    cursor: pointer;
    min-height: var(--tap);
  }

  .event h2 {
    font-size: 1rem;
    margin: 0;
    cursor: pointer;
  }

  .event h4 {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-muted);
    text-align: right;
  }

  .event-right {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    flex-shrink: 0;
  }

  .initiate-points {
    display: inline-block;
    margin-left: var(--space-2);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--color-orange);
  }

  .plus {
    width: 14px;
    height: 14px;
    background: linear-gradient(var(--color-text) 0 0),
      linear-gradient(var(--color-text) 0 0);
    background-position: center;
    background-size: 100% 2px, 2px 100%;
    background-repeat: no-repeat;
    transition: transform var(--transition);
  }

  .event-description {
    height: 0;
    overflow: hidden;
  }

  .toggler:checked ~ .event-description {
    height: auto;
    padding-bottom: var(--space-4);
  }

  .toggler:checked ~ label .plus {
    transform: rotate(45deg);
  }

  .location {
    display: block;
    margin-bottom: var(--space-3);
    text-decoration: none;
  }

  .virtual {
    margin-bottom: var(--space-3);
  }

  p {
    margin: 0;
  }
</style>
