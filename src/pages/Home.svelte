<script lang="ts">
  import HeroText from "../content/Home/hero_text.md";
  import LeadershipText from "../content/Home/leadership_text.md";
  import MainContent from "../content/Home/main1.md";
  import MainContent2 from "../content/Home/main2.md";
  import leadership_json from "../content/Home/leadership.json";
  import Nav from "../components/Nav.svelte";
  import { ArrowDownCircleIcon } from "svelte-feather-icons";
  import Footer from "../components/Footer.svelte";
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
              <div class="leader">
                <img src={leader.image} class="leader_image" alt={"Image of " + leader.name} role="presentation" />
                <div class="leader_name">
                  {leader.name}
                </div>
                <div class="leader_role">
                  {leader.role}
                </div>
              </div>
            {/each}
          </div>
          <div class="leadership_contact">
            <a href={`mailto:${leadership_json.contact}`}>Contact Us</a>
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
    text-align: center;
    padding-left: 7px;
    padding-right: 7px;
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
    padding-bottom: 40px;
  }

  .leadership_contact {
    margin-bottom: 30px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .leadership_contact a {
    display: block;
    color: white !important;
    text-decoration: none !important;
    background-color: #0f2040;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 22px;
    cursor: pointer;
    z-index: 125;
  }
</style>
