<script>
  import { onMount } from 'svelte';
  
  import { GOOGLE_API_KEY } from '../config';
  
  export let calendarId;
  
  let events = [];
  let loading = true;
  let error = '';
  let currentMonth = new Date();
  
  onMount(() => {
    fetchEvents();
  });
  
  async function fetchEvents() {
    loading = true;
    error = '';
    
    try {
      // Get first and last day of current month
      const timeMin = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
      const timeMax = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0, 23, 59, 59);
      
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${GOOGLE_API_KEY}&timeMin=${timeMin.toISOString()}&timeMax=${timeMax.toISOString()}&singleEvents=true&orderBy=startTime&maxResults=50`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'Failed to fetch events');
      }
      
      events = data.items || [];
    } catch (err) {
      error = err.message || 'Failed to fetch calendar events';
      console.error('Error:', err);
    } finally {
      loading = false;
    }
  }
  
  function previousMonth() {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    fetchEvents();
  }
  
  function nextMonth() {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    fetchEvents();
  }
  
  function goToToday() {
    currentMonth = new Date();
    fetchEvents();
  }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    return { day, month, weekday };
  }
  
  function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    }).toLowerCase();
  }
  
  function isAllDayEvent(event) {
    return !event.start.dateTime;
  }
  
  function getCurrentMonthYear() {
    return currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
  
  function shouldShowDateHeader(index) {
    if (index === 0) return true;
    
    const currentEvent = events[index];
    const prevEvent = events[index - 1];
    
    const currentDate = formatDate(currentEvent.start.dateTime || currentEvent.start.date);
    const prevDate = formatDate(prevEvent.start.dateTime || prevEvent.start.date);
    
    return currentDate.day !== prevDate.day || currentDate.month !== prevDate.month;
  }
  
  function isCurrentMonth() {
    const now = new Date();
    return currentMonth.getMonth() === now.getMonth() && 
           currentMonth.getFullYear() === now.getFullYear();
  }
</script>

<div class="calendar-container">
  <div class="calendar-widget">
    <!-- Calendar Header -->
    <div class="calendar-header">
      <button class="nav-btn" on:click={previousMonth} aria-label="Previous month">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <span class="date-range">{getCurrentMonthYear()}</span>
      
      <div class="header-actions">
        <button class="nav-btn" on:click={nextMonth} aria-label="Next month">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <button 
          class="icon-btn" 
          on:click={goToToday}
          disabled={isCurrentMonth()}
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

    <!-- Events List -->
    <div class="events-list">
      {#if loading}
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Loading events...</p>
        </div>
      {:else if error}
        <div class="error-state">
          <p class="error-title">Error loading events</p>
          <p class="error-message">{error}</p>
          <button class="retry-btn" on:click={fetchEvents}>Retry</button>
        </div>
      {:else if events.length === 0}
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.3;">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <p class="empty-title">No events scheduled</p>
          <p class="empty-message">There are no events for {getCurrentMonthYear()}</p>
          {#if !isCurrentMonth()}
            <button class="today-btn" on:click={goToToday}>Go to current month</button>
          {/if}
        </div>
      {:else}
        <div class="events-container">
          {#each events as event, index (event.id || index)}
            {@const dateParts = formatDate(event.start.dateTime || event.start.date)}
            
            {#if shouldShowDateHeader(index)}
              <div class="date-header">
                {dateParts.day} {dateParts.month}, {dateParts.weekday}
              </div>
            {/if}
            
            <div class="event-row">
              <div class="event-time">
                <div class="time-dot"></div>
                <span class="time-text">
                  {isAllDayEvent(event) ? 'All day' : formatTime(event.start.dateTime)}
                </span>
              </div>
              
              <div class="event-details">
                <div class="event-name">
                  {event.summary || 'Untitled Event'}
                </div>
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
  .calendar-container {
    width: 100%;
    margin: 2rem 0;
  }

  .calendar-widget {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .nav-btn, .icon-btn {
    background: #f9fafb;
    border: 1px solid #d1d5db;
    color: #4b5563;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .nav-btn:hover, .icon-btn:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }

  .icon-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .icon-btn:disabled:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }

  .date-range {
    color: #1f2937;
    font-weight: 600;
    font-size: 1rem;
  }

  .header-actions {
    display: flex;
    gap: 0.5rem;
  }

  .events-list {
    padding: 1rem 1.5rem;
    max-height: 420px;
    overflow-y: auto;
  }

  /* Custom scrollbar */
  .events-list::-webkit-scrollbar {
    width: 6px;
  }

  .events-list::-webkit-scrollbar-track {
    background: transparent;
  }

  .events-list::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 3px;
  }

  .events-list::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }

  .loading-state, .error-state, .empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: #6b7280;
  }

  .spinner {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 3px solid #e5e7eb;
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .error-title {
    color: #dc2626;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .error-message {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

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

  .retry-btn, .today-btn {
    padding: 0.5rem 1rem;
    background-color: #6366f1;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.875rem;
  }

  .retry-btn:hover, .today-btn:hover {
    background-color: #4f46e5;
  }

  .events-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .date-header {
    color: #6b7280;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 1rem 1rem 0.5rem;
  }

  .event-row {
    display: flex;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
    border-bottom: 1px solid #f3f4f6;
  }

  .event-row:hover {
    background-color: #f9fafb;
  }

  .event-row:last-child {
    border-bottom: none;
  }

  .event-time {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 80px;
  }

  .time-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #6366f1;
    flex-shrink: 0;
  }

  .time-text {
    color: #6b7280;
    font-size: 0.875rem;
  }

  .event-details {
    flex: 1;
    min-width: 0;
  }

  .event-name {
    color: #374151;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .event-location {
    color: #6b7280;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
</style>