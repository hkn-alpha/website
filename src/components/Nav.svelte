<script>
  import { Link } from "svelte-routing";
  import { links } from "../content/outside_links";

  let open = false;

  function closeMenu() {
    open = false;
  }

  function navProps({ isCurrent, isPartiallyCurrent }) {
    const active = isCurrent || isPartiallyCurrent;
    return {
      class: active ? "nav-link active" : "nav-link",
      "aria-current": isCurrent ? "page" : undefined,
    };
  }

  function homeProps({ isCurrent }) {
    return {
      class: isCurrent ? "nav-link active" : "nav-link",
      "aria-current": isCurrent ? "page" : undefined,
    };
  }
</script>

<header class="nav-wrap">
  <nav class="nav container" aria-label="Main">
    <Link to="/" class="logo-link" on:click={closeMenu}>
      <img
        class="logo-img"
        src="/logo.svg"
        alt="Eta Kappa Nu"
        width="120"
        height="48"
      />
    </Link>

    <button
      class="menu-btn"
      type="button"
      aria-expanded={open}
      aria-controls="nav-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      on:click={() => (open = !open)}
    >
      <span class="hamb" class:open />
    </button>

    <div id="nav-menu" class="nav-links" class:open>
      <Link to="/" getProps={homeProps} on:click={closeMenu}>Home</Link>
      <Link to="/services" getProps={navProps} on:click={closeMenu}
        >Student Services</Link
      >
      <Link to="/sponsors" getProps={navProps} on:click={closeMenu}
        >Sponsors</Link
      >
      <Link to="/howtojoin" getProps={navProps} on:click={closeMenu}
        >Get Involved</Link
      >
      {#each links as NLink}
        <a
          href={NLink.href}
          class="nav-link"
          target="_blank"
          rel="noopener noreferrer"
          on:click={closeMenu}
        >
          {#if NLink.icon}
            <span class="icon-label">{NLink.name}</span>
            <span class="icon" aria-hidden="true">
              <svelte:component this={NLink.icon} size="20" />
            </span>
          {:else}
            {NLink.name}
          {/if}
        </a>
      {/each}
    </div>
  </nav>
</header>

<style>
  .nav-wrap {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    padding-top: env(safe-area-inset-top);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--nav-height);
    gap: var(--space-4);
  }

  :global(.logo-link) {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none !important;
  }

  .logo-img {
    height: 40px;
    width: auto;
  }

  .menu-btn {
    display: none;
    width: var(--tap);
    height: var(--tap);
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    padding: 0;
  }

  .hamb {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--color-text);
    position: relative;
  }

  .hamb::before,
  .hamb::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--color-text);
    transition: transform var(--transition), top var(--transition);
  }

  .hamb::before {
    top: -6px;
  }

  .hamb::after {
    top: 6px;
  }

  .hamb.open {
    background: transparent;
  }

  .hamb.open::before {
    top: 0;
    transform: rotate(-45deg);
  }

  .hamb.open::after {
    top: 0;
    transform: rotate(45deg);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }

  :global(.nav-link) {
    display: inline-flex;
    align-items: center;
    min-height: 36px;
    padding: 0 var(--space-3);
    color: var(--color-text) !important;
    text-decoration: none !important;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
  }

  :global(.nav-link:hover) {
    color: var(--color-orange) !important;
  }

  :global(.nav-link.active) {
    border-bottom-color: var(--color-orange);
  }

  .icon {
    display: inline-flex;
    align-items: center;
  }

  .icon-label {
    display: none;
  }

  @media (max-width: 800px) {
    .menu-btn {
      display: flex;
    }

    .nav-links {
      display: none;
      position: absolute;
      top: calc(var(--nav-height) + env(safe-area-inset-top));
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: stretch;
      background: var(--color-bg);
      border-bottom: 1px solid var(--color-border);
      padding: var(--space-2) var(--space-4) var(--space-4);
      gap: 0;
    }

    .nav-links.open {
      display: flex;
    }

    :global(.nav-link) {
      min-height: var(--tap);
      padding: var(--space-3) var(--space-2);
      border-bottom: 1px solid var(--color-border);
      justify-content: flex-start;
    }

    :global(.nav-link.active) {
      border-bottom-color: var(--color-border);
      color: var(--color-orange) !important;
    }

    .icon {
      display: none;
    }

    .icon-label {
      display: inline;
    }
  }
</style>
