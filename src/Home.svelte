<script lang="ts">
  import HeroText from "./content/hero_text.md";
  import MainContent from "./content/main.md";
  import leadership_json from "./content/leadership.json";
  import Nav from "./components/Nav.svelte";
  import { ArrowDownCircleIcon } from "svelte-feather-icons";
</script>

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
          <div class="leadership_grid">
            {#each leadership_json.leaders as leader}
              <div class="leader">
                <img src={leader.image} class="leader_image" alt="Hi" />
                <span class="leader_name">
                  {leader.name}
                </span>
              </div>
            {/each}
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
</style>
