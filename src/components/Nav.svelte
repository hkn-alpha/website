<script>
  import { Link, link } from "svelte-routing";
  import { links } from "../content/outside_links";
</script>

<nav class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
      <Link to="/" class="coola">
        <img src="/logo.svg" alt="Eta Kappa Nu" />
      </Link>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span class="hamb-line" />
    </label>
  </div>

  <div class="nav-links">
    <span class="nav-link not-icon">
      <Link to="/">Home</Link>
    </span>
    <span class="nav-link not-icon">
      <Link to="/services">Student Services</Link>
    </span>
    <span class= "nav-link not-icon">
      <Link to="/sponsors">Sponsors</Link>
    </span>
    <span class= "nav-link not-icon">
      <Link to="/howtojoin">Get Involved</Link>
    </span>
    
    {#each links as NLink}
      <span
        class={NLink.icon ? `nav-link` : `nav-link not-icon`}
      >
        <a href={NLink.href}>
          {#if NLink.icon}
            <span class="link_text">{NLink.name}</span>
            <div class="link_icon"><NLink.icon size="30" /></div>
          {:else}
            {NLink.name}
          {/if}
        </a></span
      >
    {/each}
  </div>
</nav>

<style>
  .nav {
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    position: relative;
    padding: 0 10px;
  }

  .nav > .nav-header {
    display: flex;
    align-items: center;
    z-index: 3;
    height: 100%;
  }

  .nav > .nav-header > .nav-title {
    font-size: 22px;
    color: #fff;
    z-index: 3;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .nav > .nav-header > .nav-title :global(.coola) {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .nav > .nav-header > .nav-title img {
    display: block;
    height: 100px;
    width: auto;
    transform: translateY(25px);
  }


  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: 20px;
    align-items: center;
    padding-right: 120px; /* Offset for the logo to ensure true centering */
  }

  .nav > .nav-links > .nav-link :global(a) {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    padding: 0px 15px;
  }

  .nav > .nav-links > .nav-link:hover {
    transition: background-color 0.2s;
  }
  @media only screen and (max-width: 600px) {
    .nav > .nav-links > .nav-link:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  @media only screen and (min-width: 600px) {
    .nav > .nav-links > .nav-link.not-icon:hover {
      border-bottom: 3px solid white;
      transition-duration: 0.2s;
    }

    .nav > .nav-links > .nav-link {
      border-bottom: 3px solid rgba(0, 0, 0, 0);
      transition-duration: 0.2s;
    }
  }

  .nav > #nav-check {
    display: none;
  }

  @media (max-width: 600px) {
    .nav {
      height: 60px; /* Slightly shorter on mobile */
      justify-content: space-between;
      padding: 0 0 0 0px; /* Removed right padding */
    }
    .nav > .nav-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      height: 100%;
    }
    .nav > .nav-btn > label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    .nav > .nav-btn > label:hover,
    .nav #nav-check:checked ~ .nav-btn > label {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: #0f2040;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      padding-top: 120px;
      padding-right: 0; /* Remove desktop offset */
      top: 0px;
      left: 0px;
      z-index: 1;
      flex: none; /* Reset flex from desktop */
    }
    .nav > .nav-links > .nav-link {
      display: block;
      width: 100%;
      padding: 15px 0px;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
      background-color: rgba(0, 0, 0, 0);
    }
    .nav > #nav-check:checked ~ .nav-links {
      height: calc(100vh);
      overflow-y: auto;
    }

    .nav-btn label span {
      transition-duration: 0.3s;
    }
    .hamb-line {
      background: #ffffff;
      display: block;
      height: 2px;
      position: relative;
      width: 22px;
    }
    .hamb-line::before,
    .hamb-line::after {
      background: #ffffff;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }
    .hamb-line::before {
      top: 7px;
    }
    .hamb-line::after {
      top: -7px;
    }

    .nav > #nav-check:checked ~ .nav-btn label .hamb-line {
      background: transparent;
    }
    .nav > #nav-check:checked ~ .nav-btn label .hamb-line::before {
      transform: rotate(-45deg);
      top: 0;
      left: 0;
    }
    .nav > #nav-check:checked ~ .nav-btn label .hamb-line::after {
      transform: rotate(45deg);
      top: 0;
      left: 0;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media only screen and (max-width: 600px) {
    .link_icon {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) {
    .link_text {
      display: none;
    }

    .nav-links {
      padding-right: 10px;
    }

    .link_icon {
      display: flex;
      align-items: center;
      transform: translateY(-2px); /* Slight upward shift to visually center */
    }
  }
</style>
