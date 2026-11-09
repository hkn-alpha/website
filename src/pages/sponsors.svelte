<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import Description from "../content/Sponsors/sponsor_text.md";
  import sponsors_json from "../content/Sponsors/sponsors.json";
</script>

<svelte:head>
  <title>Sponsors</title>
  <meta
    name="description"
    content="Eta Kappa Nu (HKN) partners with industry leaders who support the next generation of engineers."
  />
</svelte:head>

<div class="page">
  <Nav />
  <div class="page-body">
    <div class="container">
      <header class="page-header">
        <h1>Sponsors</h1>
        <div class="prose">
          <Description />
        </div>
      </header>

      <div class="logo-grid">
        {#each sponsors_json.sponsorships as sponsor}
          {#if sponsor.link}
            <a
              href={sponsor.link}
              target="_blank"
              class="logo"
              rel="noopener noreferrer"
            >
              <img
                src={sponsor.image}
                class="sponsor-image"
                alt={"Logo of " + sponsor.name}
                width="160"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <div class="sponsor-name">{sponsor.name}</div>
            </a>
          {:else}
            <div class="logo">
              <img
                src={sponsor.image}
                class="sponsor-image"
                alt={"Logo of " + sponsor.name}
                width="160"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <div class="sponsor-name">{sponsor.name}</div>
            </div>
          {/if}
        {/each}
      </div>

      <section class="sponsor-hkn section">
        <h2>Sponsor HKN</h2>
        <p>
          Interested in sponsoring HKN? We're flexible about packages and happy
          to discuss options.
        </p>
        <a class="text-link" href="mailto:hkn@illinois.edu"
          >hkn@illinois.edu</a
        >
        <img
          src="/WebsiteImages/SponsorsPage/Sponsorship_Flyer_Fall_2025.jpg"
          alt="HKN sponsorship packages flyer"
          width="720"
          height="960"
          loading="lazy"
          decoding="async"
          class="flyer"
        />
      </section>
    </div>
  </div>
  <Footer />
</div>

<style>
  .page-header {
    margin-bottom: var(--space-6);
  }

  .prose :global(p) {
    margin-bottom: var(--space-4);
  }

  .logo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5) var(--space-4);
    justify-items: center;
    margin-bottom: var(--space-7);
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: var(--color-text);
    width: 100%;
    max-width: 160px;
  }

  .logo:hover {
    color: var(--color-orange);
    text-decoration: none;
  }

  .sponsor-image {
    width: 100%;
    height: 72px;
    object-fit: contain;
    margin-bottom: var(--space-2);
    background: #fff;
    border-radius: var(--radius);
    padding: var(--space-2);
  }

  .sponsor-name {
    font-size: 0.9rem;
    color: var(--color-muted);
  }

  .logo:hover .sponsor-name {
    color: var(--color-orange);
  }

  .sponsor-hkn {
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-7);
  }

  .sponsor-hkn p {
    margin-bottom: var(--space-5);
    max-width: 36rem;
  }

  .flyer {
    margin-top: var(--space-6);
    width: 100%;
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
  }

  @media (min-width: 640px) {
    .logo-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 900px) {
    .logo-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
