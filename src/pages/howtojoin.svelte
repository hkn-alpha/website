<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import HowToJoinText from "../content/HowToJoin/information.md";
</script>

<svelte:head>
  <title>How to Join HKN</title>
  <meta
    name="description"
    content="Learn about the steps and requirements to join Eta Kappa Nu (HKN), the honor society for electrical and computer engineers."
  />
</svelte:head>

<div class="container">
  <div class="footer-push">
    <Nav />
    <div class="content">
      <h1 class="page-heading">How to Join HKN</h1>
      <div class="md-container">
        <HowToJoinText />
      </div>
    </div>
  </div>
  <Footer />

</div>

<style>
    .container {
        background-color: #0f2040;
        min-height: 100vh;
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
        margin-bottom: auto;
    }
</style>

