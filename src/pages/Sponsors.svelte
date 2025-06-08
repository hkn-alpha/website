<script>
  import Content from "../content/Sponsors/content.md";
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
  <title>Sponsors</title>
  <meta
    name="description"
    content="HKN offers review sessions for core ECE courses, and free one-on-one tutoring."
  />
</svelte:head>

<div class="container">
  <div class="footer-push">
    <Nav />
    <div class="container2">
      <h1>Sponsors</h1>
      <p>
        Eta Kappa Nu (HKN) is proud to partner with industry leaders who share our commitment
        to academic excellence and professional growth in engineering. We are grateful for their
        support in empowering the next generation of engineers.
      </p>
      <div class="logo-grid">
        <a href="https://www.imc.com/" target="_blank" class="logo">
          <img src="public/imc.webp" alt="IMC Trading Logo" />
          IMC Trading
        </a>
        <a href="https://www.burnsmcd.com/" target="_blank" class="logo">
          <img src="public/burnsmc.png" alt="Burns & McDonnell Logo" />
         Burns & McDonnell
        </a>
        <a href="https://www.lutron.com/" target="_blank" class="logo">
          <img src="public/lutron.png" alt="Lutron Logo" />
          Lutron
        </a>
        <a href="https://www.mlp.com/" target="_blank" class="logo">
          <img src="public/millennium.png" alt="Millennium Logo" />
          Millennium Financial 
        </a>

        <a href="https://www.ti.com/" target="_blank" class="logo">
          <img src="public/texasinst.jpg" alt="Texas Instruments Logo" />
          Texas Instruments
        </a>

        <a href="https://www.halliburton.com/" target="_blank" class="logo">
          <img src="public/halliburton.jpg" alt="Halliburton Logo" />
         Halliburton
        </a>
        
        
        
        
        <a href="https://www.apple.com/" target="_blank" class="logo">
          <img src="public/apple.jpg" alt="Apple Logo" />Apple
        </a>
        
        

        <a href="https://www.tsmc.com/" target="_blank" class="logo">
          <img src="public/tsmc.png" alt="TSMC Logo" />
          TSMC
        </a>
        
      </div>
    </div>
  </div>
  <Footer />
</div>

<style>
  * {
    background-color: #0f2040;
  }
  .container2 {
    color: white;
    max-width: 746px;
    padding: 23px;
    margin: auto;
    background-color: #0f2040;
  }
  .footer-push {
    min-height: calc(100vh - 70px);
  }
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  .logo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    justify-items: center;
    margin-top: 20px;
  }
  .logo {
    background-color: #ffffff;
    border: 1px solid #df631b;
    border-width: 5px;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
    text-decoration: none;
    color: #000; /* Default text color */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .logo:hover {
    background-color: #1f4180;
    transform: scale(1.05);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
    color: white; /* Changes text color on hover */
  }
  .logo img {
    max-width: 100%;
    height: 100px; /* Uniform height for all logos */
    object-fit: cover; /* Crops and maintains aspect ratio */
    margin-bottom: 10px;
    border-radius: 4px;
  }
  
</style>
