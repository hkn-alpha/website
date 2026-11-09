<script>
  import { onMount } from "svelte";
  import { GOOGLE_API_KEY } from "../config";

  export let calendarId;

  let events = [];
  let loading = true;
  let error = "";
  let currentMonth = new Date();

  onMount(() => {
    fetchEvents();
  });

  async function fetchEvents() {
    loading = true;
    error = "";

    try {
      const timeMin = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        1
      );
      const timeMax = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        0,
        23,
        59,
        59
      );

      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId
      )}/events?key=${GOOGLE_API_KEY}&timeMin=${timeMin.toISOString()}&timeMax=${timeMax.toISOString()}&singleEvents=true&orderBy=startTime&maxResults=50`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || "Failed to fetch events");
      }

      events = data.items || [];
    } catch (err) {
      error = err.message || "Failed to fetch calendar events";
      console.error("Error:", err);
    } finally {
      loading = false;
    }
  }

  function previousMonth() {
    currentMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    fetchEvents();
  }

  function nextMonth() {
    currentMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    fetchEvents();
  }

  function goToToday() {
    currentMonth = new Date();
    fetchEvents();
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date
      .toLocaleDateString("en-US", { month: "short" })
      .toUpperCase();
    const weekday = date
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase();
    return { day, month, weekday };
  }

  function formatTime(dateString) {
    const date = new Date(dateString);
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  }

  function isAllDayEvent(event) {
    return !event.start.dateTime;
  }

  function shouldShowDateHeader(index) {
    if (index === 0) return true;

    const currentEvent = events[index];
    const prevEvent = events[index - 1];
    const currentDate = formatDate(
      currentEvent.start.dateTime || currentEvent.start.date
    );
    const prevDate = formatDate(
      prevEvent.start.dateTime || prevEvent.start.date
    );

    return (
      currentDate.day !== prevDate.day || currentDate.month !== prevDate.month
    );
  }

  $: isCurrentMonth = (() => {
    const now = new Date();
    return (
      currentMonth.getMonth() === now.getMonth() &&
      currentMonth.getFullYear() === now.getFullYear()
    );
  })();

  $: monthDisplay = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
</script>

<div class="calendar">
  <div class="calendar-header">
    <button
      class="text-action"
      type="button"
      on:click={previousMonth}
      aria-label="Previous month"
    >
      Prev
    </button>
    <span class="month">{monthDisplay}</span>
    <div class="header-actions">
      <button
        class="text-action"
        type="button"
        on:click={nextMonth}
        aria-label="Next month"
      >
        Next
      </button>
      <button
        class="text-action"
        type="button"
        on:click={goToToday}
        disabled={isCurrentMonth}
      >
        Today
      </button>
    </div>
  </div>

  <div class="events-list">
    {#if loading}
      <p class="state muted">Loading events…</p>
    {:else if error}
      <div class="state">
        <p class="error">Error loading events</p>
        <p class="muted">{error}</p>
        <button class="text-action" type="button" on:click={fetchEvents}
          >Retry</button
        >
      </div>
    {:else if events.length === 0}
      <div class="state">
        <p>No events scheduled</p>
        <p class="muted">There are no events for {monthDisplay}</p>
        {#if !isCurrentMonth}
          <button class="text-action" type="button" on:click={goToToday}
            >Go to current month</button
          >
        {/if}
      </div>
    {:else}
      {#each events as event, index (event.id || index)}
        {@const dateParts = formatDate(
          event.start.dateTime || event.start.date
        )}
        {#if shouldShowDateHeader(index)}
          <div class="date-header">
            {dateParts.day} {dateParts.month}, {dateParts.weekday}
          </div>
        {/if}
        <div class="event-row">
          <div class="event-time">
            <span class="time-dot" aria-hidden="true" />
            <span class="time-text">
              {isAllDayEvent(event)
                ? "All day"
                : formatTime(event.start.dateTime)}
            </span>
          </div>
          <div class="event-details">
            <div class="event-name">{event.summary || "Untitled Event"}</div>
            {#if event.location}
              <div class="event-location">{event.location}</div>
            {/if}
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .calendar {
    width: 100%;
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    background: var(--color-surface);
    overflow: hidden;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3);
    padding: var(--space-4);
    border-bottom: 1px solid var(--color-border);
  }

  .month {
    font-weight: 600;
    color: var(--color-text);
    font-size: 1rem;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .events-list {
    padding: var(--space-4);
  }

  .state {
    text-align: center;
    padding: var(--space-6) var(--space-3);
  }

  .error {
    color: var(--color-orange);
    font-weight: 500;
  }

  .date-header {
    color: var(--color-muted);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: var(--space-4) 0 var(--space-2);
  }

  .date-header:first-child {
    padding-top: 0;
  }

  .event-row {
    display: flex;
    gap: var(--space-4);
    padding: var(--space-3) 0;
    border-bottom: 1px solid var(--color-border);
  }

  .event-row:last-child {
    border-bottom: none;
  }

  .event-time {
    display: flex;
    align-items: flex-start;
    gap: var(--space-2);
    min-width: 78px;
    padding-top: 2px;
  }

  .time-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-orange);
    flex-shrink: 0;
    margin-top: 5px;
  }

  .time-text {
    color: var(--color-muted);
    font-size: 0.85rem;
  }

  .event-details {
    flex: 1;
    min-width: 0;
  }

  .event-name {
    color: var(--color-text);
    font-size: 0.95rem;
    font-weight: 500;
  }

  .event-location {
    color: var(--color-muted);
    font-size: 0.85rem;
    margin-top: 2px;
  }
</style>
