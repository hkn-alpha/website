<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import HowToJoinText from "../content/HowToJoin/information.md";
  import ImageTest from "../content/HowToJoin/image.md"
</script>

<svelte:head>
  <title>How to Join HKN</title>
  <meta
    name="description"
    content="Learn about the steps and requirements to join Eta Kappa Nu (HKN), the honor society for electrical and computer engineers."
  />
</svelte:head>

<div class="page-wrapper">
  <Nav />

  <div class="content">
    <h1 class="page-heading">How to Join HKN</h1>
    <div class="md-container">
      <HowToJoinText />
    </div>
    <div class="md-container-img">
      <ImageTest />

    </div>

  </div>

  <Footer />
</div>

<style>
  /* Make a vertical layout that fills the page */
  .page-wrapper {
    background-color: #0f2040;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Expands to push footer to the bottom when short */
  .content {
    flex: 1;
  }

  .page-heading {
    margin-bottom: 20px;
    color: white;
  }

  .md-container {
    max-width: 800px;
    color: white;
    padding-left: 23px;
    padding-right: 23px;
    margin-left: auto;
    margin-right: auto;
  }

  .md-container-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }
</style>