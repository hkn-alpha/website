<script lang="ts">
  import HeroText from "../content/Home/hero_text.md";
  import LeadershipText from "../content/Home/leadership_text.md";
  import MainContent from "../content/Home/main1.md";
  import CorporateText from "../content/Home/main2.md";
  import OutreachText from "../content/Home/outreach.md";
  import leadership_json from "../content/Home/leadership.json";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import CalendarWidget from "../components/CalendarWidget.svelte";
  import { googleCalendar } from "../content/Home/calendar";
  import { link } from "svelte-routing";
</script>

<svelte:head>
  <title>Eta Kappa Nu</title>
  <meta
    name="description"
    content="HKN is an honor society for electrical and computer engineers."
  />
</svelte:head>

<div class="page">
  <Nav />
  <div class="page-body">
    <div class="container">
      <section class="intro section">
        <p class="brand">Eta Kappa Nu · Alpha Chapter</p>
        <div class="hero-line" role="heading" aria-level={1}><HeroText /></div>
        <p class="lede muted">
          Review sessions, free tutoring, and events for Illinois ECE.
        </p>
      </section>

      <section class="shortcuts section" aria-label="Quick links">
        <ul class="shortcut-list">
          <li>
            <a href="/services#reviews" use:link>
              <div class="shortcut-title">Review sessions</div>
              <p class="shortcut-desc">
                Schedules, slides, worksheets, and recordings.
              </p>
            </a>
          </li>
          <li>
            <a href="/services#tutoring" use:link>
              <div class="shortcut-title">Get a tutor</div>
              <p class="shortcut-desc">
                Free one-on-one peer tutoring for ECE courses.
              </p>
            </a>
          </li>
          <li>
            <a href="#events">
              <div class="shortcut-title">Events</div>
              <p class="shortcut-desc">
                Tech talks, socials, and chapter gatherings.
              </p>
            </a>
          </li>
          <li>
            <a href="/howtojoin" use:link>
              <div class="shortcut-title">Join HKN</div>
              <p class="shortcut-desc">
                How initiation works and who can apply.
              </p>
            </a>
          </li>
        </ul>
      </section>

      <section class="section">
        <h2>Our mission</h2>
        <div class="prose">
          <MainContent />
        </div>
      </section>

      <section id="events" class="section">
        <h2>Upcoming events</h2>
        <p class="muted">
          Open events for members and the broader ECE community. Tap an event for
          details.
        </p>
        <CalendarWidget calendarId={googleCalendar.calendarId} />
      </section>

      <section class="section">
        <h2>Our leadership</h2>
        <div class="prose muted leadership-blurb">
          <LeadershipText />
        </div>
        <div class="leadership_grid">
          {#each leadership_json.leaders as leader}
            <div class="leader">
              <img
                src={leader.image}
                class="leader_image"
                alt={leader.name}
                width="72"
                height="72"
                loading="lazy"
                decoding="async"
              />
              <div class="leader_name">{leader.name}</div>
              <div class="leader_role">{leader.role}</div>
            </div>
          {/each}
        </div>
        <div class="contact-row">
          <a class="text-link" href={`mailto:${leadership_json.contact}`}
            >Contact us</a
          >
        </div>
      </section>

      <section class="section split">
        <div>
          <h2>Corporate</h2>
          <div class="prose">
            <CorporateText />
          </div>
        </div>
        <img
          src="/Main2/millenium_corporate.jpg"
          alt="Students at a corporate event"
          width="720"
          height="480"
          loading="lazy"
          decoding="async"
          class="section-image"
        />
      </section>

      <section class="section split">
        <div>
          <h2>Outreach</h2>
          <div class="prose">
            <OutreachText />
          </div>
        </div>
        <img
          src="/Main2/1002_outreach.jpg"
          alt="Students at an outreach event"
          width="720"
          height="480"
          loading="lazy"
          decoding="async"
          class="section-image"
        />
      </section>
    </div>
  </div>
  <Footer />
</div>

<style>
  .intro {
    padding-top: var(--space-6);
    padding-bottom: var(--space-5);
  }

  .brand {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--color-orange);
    margin-bottom: var(--space-3);
  }

  .hero-line {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: var(--space-3);
  }

  .hero-line :global(p) {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: var(--color-text);
  }

  .lede {
    margin: 0;
    max-width: 36rem;
  }

  .shortcuts {
    padding-top: 0;
  }

  .prose :global(p) {
    margin-bottom: var(--space-4);
  }

  .prose :global(h1),
  .prose :global(h2) {
    display: none;
  }

  .leadership-blurb {
    margin-bottom: var(--space-5);
  }

  .leadership_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5) var(--space-3);
  }

  .leader {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .leader_image {
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid var(--color-text);
    margin-bottom: var(--space-2);
  }

  .leader_name {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text);
  }

  .leader_role {
    font-size: 0.85rem;
    color: var(--color-muted);
  }

  .contact-row {
    margin-top: var(--space-6);
    display: flex;
    justify-content: center;
  }

  .split {
    display: grid;
    gap: var(--space-5);
  }

  .section-image {
    width: 100%;
    border-radius: var(--radius);
    border: 1px solid var(--color-border);
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }

  @media (min-width: 640px) {
    .hero-line {
      font-size: 1.85rem;
    }

    .leadership_grid {
      grid-template-columns: repeat(4, 1fr);
    }

    .split {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
</style>
