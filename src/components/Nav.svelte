<script>
  import { Link, link } from "svelte-routing";
  import { links } from "../content/outside_links";
</script>

<nav class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
      <Link to="/" class="coola" style="color: white; text-decoration: none;">
        <img src="/logo.svg" alt="Eta Kappa Nu" width="100px" height="auto" />
      </Link>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span class="hamb-line" />
    </label>
  </div>

  <div class="nav-links">
    <span class="nav-link">
      <Link to="/" style="color: white; text-decoration: none;">Home</Link>
    </span>
    <span class="nav-link">
      <Link to="/services" style="color: white; text-decoration: none;"
        >Student Services</Link
      >
    </span>
    {#each links as NLink}
      <span class={NLink.icon ? `nav-link adjusted-nav-link` : `nav-link`}>
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
    height: 50px;
    width: 100%;
    position: relative;
  }

  .nav > .nav-header {
    display: inline;
    z-index: 3;
    position: sticky;
  }

  .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 10px 10px 10px 10px;
    z-index: 3;
  }

  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;
  }

  .nav > .nav-links > .nav-link {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
  }

  .nav > .nav-links > .nav-link:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav > #nav-check {
    display: none;
  }

  @media (max-width: 600px) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 2;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
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
      padding-top: 125px;
      top: 0px;
      left: 0px;
      z-index: 1;
    }
    .nav > .nav-links > .nav-link {
      display: block;
      width: 100%;
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
      margin-top: 10px;
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
      top: -1px;
      left: -1.5px;
    }
    .nav > #nav-check:checked ~ .nav-btn label .hamb-line::after {
      transform: rotate(45deg);
      top: -1px;
      left: -1.5px;
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
    .adjusted-nav-link {
      margin-top: -25px;
    }

    .nav-links {
      padding-right: 10px;
    }
  }
</style>
