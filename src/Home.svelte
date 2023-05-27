<script lang="ts">
  import HeroText from "./content/hero_text.md";
  import LeadershipText from "./content/leadership_text.md";
  import MainContent from "./content/main1.md";
  import MainContent2 from "./content/main2.md";
  import leadership_json from "./content/leadership.json";
  import Nav from "./components/Nav.svelte";
  import { ArrowDownCircleIcon } from "svelte-feather-icons";
  import Footer from "./components/Footer.svelte";
</script>

<svelte:head>
  <title>Eta Kappa Nu</title>
  <meta
    name="description"
    content="HKN is an honor society for electrical and computer engineers."
  />
</svelte:head>

<div class="container">
  <div class="hero">
    <Nav />
    <div class="cta">
      <HeroText />
      <div class="downcircle">
        <a href="#maincontent">
          <ArrowDownCircleIcon size="55" strokeWidth={1.35} />
        </a>
      </div>
    </div>
  </div>
  <div class="triangle">
    <div class="triangle2" />
    <div class="triangle_inner">
      <main id="maincontent">
        <MainContent />
      </main>
      <section class="triangle_white">
        <div class="triangle_white_inner">
          <h1>Our Leadership</h1>
          <div class="lt">
            <LeadershipText />
          </div>
          <div class="leadership_grid">
            {#each leadership_json.leaders as leader}
              <a href={`mailto:${leader.email}`}>
                <div class="leader">
                  <img src={leader.image} class="leader_image" alt="Hi" />
                  <div class="leader_name">
                    {leader.name}
                  </div>
                  <div class="leader_role">
                    {leader.role}
                  </div>
                </div>
              </a>
            {/each}
          </div>
          <div class="triangle force-blue-triangle">
            <div class="triangle_inner">
              <main>
                <MainContent2 />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

<style>
  .downcircle {
    margin-bottom: 20px;
    margin-top: 5px;
    z-index: 100;
    position: relative;
  }
  .downcircle a {
    color: #fff !important;
  }

  .leader_role {
    font-style: italic;
  }

  a {
    text-decoration: none !important;
  }

  .leader_name {
    color: #0f2040;
    font-weight: 500;
  }

  .leader_role {
    color: #0f2040;
  }

  .lt {
    max-width: 626px;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    color: #0f2040;
    padding-left: 23px;
    padding-right: 23px;
  }

  .leadership_grid {
    margin-bottom: 30px;
    padding-bottom: 40px;
  }
</style>
