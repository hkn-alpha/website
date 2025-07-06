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

<div class="container">
  <div class="footer-push">
    <Nav />
    <div class="container2">
      <h1>Sponsors</h1>
      <div class="md-container">
        <Description />
      </div>
      <div class="logo-grid">
        {#each sponsors_json.sponsorships as sponsor}
          <a href={sponsor.link} target="_blank" class="logo" rel="noopener noreferrer">
            <img
              src={sponsor.image}
              class="sponsor-image"
              alt={"Logo of " + sponsor.name}
            />
            <div class="sponsor-name">{sponsor.name}</div>
          </a>
        {/each}
      </div>
    </div>
  </div>
  <Footer />
</div>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: white;
    color: #0f2040;
    font-family: sans-serif;
  }

  .container2 {
    max-width: 900px;
    padding: 24px;
    margin: auto;
    background-color: #0f2040;
  }

  .footer-push {
    min-height: calc(100vh - 70px); /* adjust to match Footer height */
  }

  h1 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }

  .md-container {
    margin-bottom: 2rem;
  }

  .logo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 30px;
    justify-items: center;
    padding-bottom: 60px;
  }

  .logo {
    background-color: #ffffff;
    border: 3px solid #df631b;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    color: black;
    transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo:hover {
    background-color: #1f4180;
    color: white;
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
  }

  .sponsor-image {
    max-width: 100%;
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  .sponsor-name {
    font-style: italic;
    text-align: center;
  }

  @media (max-width: 600px) {
    .sponsor-image {
      height: 80px;
    }
  }
</style>
