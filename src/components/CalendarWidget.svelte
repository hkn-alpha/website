<script>

  import { onMount } from 'svelte';

  import { GOOGLE_API_KEY } from '../config';
  
  // Component prop: the Google Calendar ID to fetch events from
  // This is passed in by the parent component
  export let calendarId;
  
  // STATE VARIABLES
  let events = [];              // Array to store calendar events
  let loading = true;           // Track loading state for UI feedback
  let error = '';               // Store error messages
  let currentMonth = new Date(); // Track which month we're viewing
  
  // LIFECYCLE: Run fetchEvents when component mounts
  onMount(() => {
    fetchEvents();
  });
  
  /**
   * Fetch events from Google Calendar API for the current month
   * Uses the Google Calendar v3 REST API
   */
  async function fetchEvents() {
    loading = true;  // Show loading indicator
    error = '';      // Clear any previous errors
    
    try {
      // Calculate the first day of the current month 
      const timeMin = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
      
      // Calculate the last day of the current month (at 11:59:59 PM)
      const timeMax = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0, 23, 59, 59);
      
      // Build the Google Calendar API URL with query parameters:
      // - calendarId: which calendar to fetch from
      // - key: API authentication
      // - timeMin/timeMax: date range filter
      // - singleEvents: expand recurring events into individual instances
      // - orderBy: sort events by start time
      // - maxResults: limit to 50 events
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${GOOGLE_API_KEY}&timeMin=${timeMin.toISOString()}&timeMax=${timeMax.toISOString()}&singleEvents=true&orderBy=startTime&maxResults=50`;
      
      // Make the API request
      const response = await fetch(url);
      const data = await response.json();
      
      // Check if API returned an error
      if (data.error) {
        throw new Error(data.error.message || 'Failed to fetch events');
      }
      
      // Store the events (or empty array if none)
      events = data.items || [];
    } catch (err) {
      // Handle any errors during fetch
      error = err.message || 'Failed to fetch calendar events';
      console.error('Error:', err);
    } finally {
      // Always hide loading indicator when done
      loading = false;
    }
  }
  
  /**
   * Navigate to the previous month
   * Creates a new Date object for the first day of the previous month
   */
  function previousMonth() {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    fetchEvents(); // Refresh events for the new month
  }
  
  /**
   * Navigate to the next month
   * Creates a new Date object for the first day of the next month
   */
  function nextMonth() {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    fetchEvents(); // Refresh events for the new month
  }
  
  /**
   * Jump back to the current month (today's month)
   */
  function goToToday() {
    currentMonth = new Date(); // Reset to current date
    fetchEvents();
  }
  
  /**
   * Format a date string into separate components for display
   * @param {string} dateString - ISO date string from calendar event
   * @returns {object} Object with day, month abbreviation, and weekday
   */
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate(); // Day of month (1-31)
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(); // "JAN", "FEB", etc.
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(); // "MON", "TUE", etc.
    return { day, month, weekday };
  }
  
  /**
   * Format time to 12-hour format with AM/PM
   * @param {string} dateString - ISO datetime string
   * @returns {string} Formatted time like "2:30 pm"
   */
  function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric',        // No leading zero (2 not 02)
      minute: '2-digit',      // Always 2 digits for minutes (30 not 3)
      hour12: true            // Use 12-hour format with AM/PM
    }).toLowerCase();         // Convert to lowercase
  }
  
  /**
   * Check if an event is an all-day event
   * All-day events have a 'date' property instead of 'dateTime'
   * @param {object} event - Calendar event object
   * @returns {boolean} True if all-day event
   */
  function isAllDayEvent(event) {
    return !event.start.dateTime;
  }
  
  /**
   * Determine if we should show a date header before this event
   * Show a header when:
   * 1. It's the first event, OR
   * 2. The date is different from the previous event
   * @param {number} index - Index of current event in array
   * @returns {boolean} True if date header should be shown
   */
  function shouldShowDateHeader(index) {
    // Always show header for the first event
    if (index === 0) return true;
    
    const currentEvent = events[index];
    const prevEvent = events[index - 1];
    
    // Get formatted dates for both events
    const currentDate = formatDate(currentEvent.start.dateTime || currentEvent.start.date);
    const prevDate = formatDate(prevEvent.start.dateTime || prevEvent.start.date);
    
    // Show header if day OR month changed
    return currentDate.day !== prevDate.day || currentDate.month !== prevDate.month;
  }
  
  /**
   * REACTIVE STATEMENT: Check if we're viewing the current month
   * The $ prefix makes this reactive - it automatically updates when currentMonth changes
   * Used to disable the "Today" button when already viewing current month
   */
  $: isCurrentMonth = (() => {
    const now = new Date();
    return currentMonth.getMonth() === now.getMonth() && 
           currentMonth.getFullYear() === now.getFullYear();
  })();
  
  /**
   * REACTIVE STATEMENT: Format the current month for display
   * Automatically updates when currentMonth changes
   * Example output: "November 2025"
   */
  $: monthDisplay = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
</script>

<!-- TEMPLATE: The HTML structure of the component -->
<div class="calendar-container">
  <div class="calendar-widget">
    
    <!-- HEADER: Navigation and month display -->
    <div class="calendar-header">
      <!-- Previous month button -->
      <button class="nav-btn" on:click={previousMonth} aria-label="Previous month">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <!-- Current month/year display -->
      <span class="date-range">{monthDisplay}</span>
      
      <div class="header-actions">
        <!-- Next month button -->
        <button class="nav-btn" on:click={nextMonth} aria-label="Next month">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        <!-- Today button - disabled when already viewing current month -->
        <button 
          class="icon-btn" 
          on:click={goToToday}
          disabled={isCurrentMonth}
          aria-label="Go to current month"
          title="Today"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- EVENTS LIST: Main content area -->
    <div class="events-list">
      
      <!-- CONDITIONAL RENDERING: Show different content based on state -->
      
      <!-- Loading state: Show spinner while fetching -->
      {#if loading}
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Loading events...</p>
        </div>
      
      <!-- Error state: Show error message if fetch failed -->
      {:else if error}
        <div class="error-state">
          <p class="error-title">Error loading events</p>
          <p class="error-message">{error}</p>
          <button class="retry-btn" on:click={fetchEvents}>Retry</button>
        </div>
      
      <!-- Empty state: Show message when no events found -->
      {:else if events.length === 0}
        <div class="empty-state">
          <!-- Calendar icon -->
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.3;">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <p class="empty-title">No events scheduled</p>
          <p class="empty-message">There are no events for {monthDisplay}</p>
          <!-- Only show "go to current month" button if not already there -->
          {#if !isCurrentMonth}
            <button class="today-btn" on:click={goToToday}>Go to current month</button>
          {/if}
        </div>
      
      <!-- Events state: Display the list of events -->
      {:else}
        <div class="events-container">
          <!-- Loop through each event -->
          <!-- Use event.id as unique key, fallback to index if no ID -->
          {#each events as event, index (event.id || index)}
            <!-- Create a constant for formatted date parts (@ symbol means local constant) -->
            {@const dateParts = formatDate(event.start.dateTime || event.start.date)}
            
            <!-- Show date header if this is a new date -->
            {#if shouldShowDateHeader(index)}
              <div class="date-header">
                {dateParts.day} {dateParts.month}, {dateParts.weekday}
              </div>
            {/if}
            
            <!-- Individual event row -->
            <div class="event-row">
              <!-- Left side: Time display -->
              <div class="event-time">
                <div class="time-dot"></div> <!-- Visual indicator dot -->
                <span class="time-text">
                  <!-- Show "All day" for all-day events, otherwise show formatted time -->
                  {isAllDayEvent(event) ? 'All day' : formatTime(event.start.dateTime)}
                </span>
              </div>
              
              <!-- Right side: Event details -->
              <div class="event-details">
                <!-- Event title -->
                <div class="event-name">
                  {event.summary || 'Untitled Event'}
                </div>
                <!-- Location (only if provided) -->
                {#if event.location}
                  <div class="event-location">
                    {event.location}
                  </div>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* CONTAINER: Outer wrapper for centering */
  .calendar-container {
    width: 100%;
    max-width: 500px;
    margin: 2rem auto; /* Center horizontally with auto margins */
  }

  /* WIDGET: Main calendar card */
  .calendar-widget {
    background: white;
    border-radius: 8px;
    /* Layered shadows for depth effect */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* Clip content to rounded corners */
    border: 1px solid #e5e7eb;
  }

  /* HEADER: Top navigation bar */
  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Space items apart */
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  /* BUTTONS: Navigation and icon buttons */
  .nav-btn, .icon-btn {
    background: #f9fafb;
    border: 1px solid #d1d5db;
    color: #4b5563;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s ease; /* Smooth hover effect */
  }

  /* Hover effect for buttons (not disabled) */
  .nav-btn:hover:not(:disabled), .icon-btn:hover:not(:disabled) {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }

  /* Disabled button styling */
  .icon-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed; /* Show "not allowed" cursor */
  }

  /* Month/year display text */
  .date-range {
    color: #1f2937;
    font-weight: 600;
    font-size: 1rem;
  }

  /* Container for next month and today buttons */
  .header-actions {
    display: flex;
    gap: 0.5rem;
  }

  /* EVENTS LIST: Scrollable container for events */
  .events-list {
    padding: 1.5rem;
    min-height: 400px;
    max-height: 600px;
    overflow-y: auto; /* Vertical scroll if content exceeds max-height */
  }

  /* CUSTOM SCROLLBAR: Webkit browsers (Chrome, Safari, Edge) */
  .events-list::-webkit-scrollbar {
    width: 6px; /* Thin scrollbar */
  }

  .events-list::-webkit-scrollbar-track {
    background: transparent; /* Invisible track */
  }

  .events-list::-webkit-scrollbar-thumb {
    background: #d1d5db; /* Light gray scroll handle */
    border-radius: 3px;
  }

  .events-list::-webkit-scrollbar-thumb:hover {
    background: #9ca3af; /* Darker on hover */
  }

  /* STATE DISPLAYS: Loading, error, and empty states */
  .loading-state, .error-state, .empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: #6b7280;
  }

  /* SPINNER: Rotating loading indicator */
  .spinner {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 3px solid #e5e7eb; /* Light gray circle */
    border-top-color: #6366f1; /* Blue top for spinning effect */
    border-radius: 50%; /* Make it circular */
    animation: spin 1s linear infinite; /* Continuous rotation */
    margin-bottom: 1rem;
  }

  /* Spin animation */
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ERROR DISPLAY */
  .error-title {
    color: #dc2626; /* Red color */
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .error-message {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  /* EMPTY STATE */
  .empty-title {
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  .empty-message {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 1rem;
  }

  /* ACTION BUTTONS: Retry and Today buttons */
  .retry-btn, .today-btn {
    padding: 0.5rem 1rem;
    background-color: #6366f1; /* Indigo background */
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.875rem;
  }

  .retry-btn:hover, .today-btn:hover {
    background-color: #4f46e5; /* Darker indigo on hover */
  }

  /* EVENTS CONTAINER: Vertical stack of events */
  .events-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  /* DATE HEADER: Separates events by date */
  .date-header {
    color: #6b7280;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase; /* ALL CAPS */
    letter-spacing: 0.5px; /* Spacing between letters */
    padding: 1rem 0 0.5rem;
  }

  /* Remove top padding from first date header */
  .date-header:first-child {
    padding-top: 0;
  }

  /* EVENT ROW: Individual event display */
  .event-row {
    display: flex;
    gap: 1rem;
    padding: 0.875rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s; /* Smooth hover transition */
    border-bottom: 1px solid #f3f4f6; /* Subtle divider line */
  }

  /* Hover effect for event rows */
  .event-row:hover {
    background-color: #f9fafb; /* Light gray background */
  }

  /* Remove border from last event in list */
  .event-row:last-child {
    border-bottom: none;
  }

  /* EVENT TIME: Left column with time display */
  .event-time {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 85px; /* Fixed width for alignment */
  }

  /* Colored dot indicator */
  .time-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%; /* Make it circular */
    background-color: #6366f1; /* Indigo color */
    flex-shrink: 0; /* Don't shrink this element */
  }

  /* Time text styling */
  .time-text {
    color: #6b7280;
    font-size: 0.875rem;
  }

  /* EVENT DETAILS: Right column with event info */
  .event-details {
    flex: 1; /* Take up remaining space */
    min-width: 0; /* Allow text truncation */
  }

  /* Event title */
  .event-name {
    color: #374151;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  /* Event location (if provided) */
  .event-location {
    color: #6b7280;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  /* RESPONSIVE: Mobile styling */
  @media (max-width: 640px) {
    .calendar-container {
      max-width: 100%; /* Full width on mobile */
    }
  }
</style>