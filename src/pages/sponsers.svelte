<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import Description from "../content/Sponsors/sponsor_text.md";
  import sponsors_json from "../content/Sponsors/sponsors.json";
  import SponsorHKNText from "../content/Sponsors/sponsor_ad.md";
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
    <div class="content">
      <h1 class="sponsor-heading">Sponsors</h1>
      <div class="md-container">
        <Description />
      </div>
      <div class="logo-grid">
          {#each sponsors_json.sponsorships as sponsor}
          {#if sponsor.link}
            <a
              href={sponsor.link}
              target="_blank"
              class="logo clickable"
              rel="noopener noreferrer"
            >
              <img
                src={sponsor.image}
                class="sponsor-image"
                alt={"Logo of " + sponsor.name}
              />
              <div class="sponsor-name">{sponsor.name}</div>
            </a>
          {:else}
            <div class="logo">
              <img
                src={sponsor.image}
                class="sponsor-image"
                alt={"Logo of " + sponsor.name}
              />
              <div class="sponsor-name">{sponsor.name}</div>
            </div>
          {/if}
        {/each}
      </div>

      <div class="sponsor-hkn">
        <h2>Sponsor HKN</h2>
        <div class="md-container">
          <SponsorHKNText />
        </div>
      <img src="/WebsiteImages/SponsorsPage/Sponsorship_Flyer_Fall_2025.jpg" alt="Sponsor HKN promotional image" class="sponsor-hkn-img"/>
      </div>  
    </div>
  </div>
  <Footer />
</div>


<style>
  .container {
    background-color: #0f2040;
    min-height: 100vh;
    color: white;
  }

  .footer-push {
    min-height: calc(100vh - 70px);
  }

  .content {
    max-width: 900px;
    padding: 24px;
    margin: auto;
    background-color: #0f2040;
  }

  .sponsor-heading {
    text-align: center;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  .md-container {
    font-size: 19px;
    color: white;
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

.logo.clickable {
  cursor: pointer;
}

.logo.clickable:hover {
  background-color: #546482;
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

  @media only screen and (max-width: 800px) {
    .content {
      padding: 16px;
    }
    .sponsor-image {
      height: 80px;
    }
  }

  a {
    color: white;
  }

  .sponsor-hkn {
  margin-top: 3rem;
  text-align: center;
  padding: 2rem;
  border-top: 2px solid #df631b;
}

.sponsor-hkn h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.sponsor-hkn .md-container {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.sponsor-hkn-img {
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
}
</style>
