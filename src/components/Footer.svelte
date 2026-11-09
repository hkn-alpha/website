<script>
  import nationals from "../content/national_link.json";
  import { links } from "../content/outside_links";
</script>

<footer class="footer">
  <div class="container footer-inner">
    <div class="left">
      &copy; {new Date().getFullYear()}
      <a href={nationals.nationals}>HKN</a> @ UIUC
      <span class="sep" aria-hidden="true">·</span>
      <a class="chapter" href={nationals.nationals}>A Chapter of Eta Kappa Nu</a>
    </div>
    <div class="right">
      <a href="mailto:hkn@illinois.edu">hkn@illinois.edu</a>
      {#each links as NLink}
        {#if NLink.icon}
          <a
            href={NLink.href}
            class="icon"
            aria-label={NLink.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svelte:component this={NLink.icon} size="18" />
          </a>
        {/if}
      {/each}
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--color-border);
    background: var(--color-surface);
    padding: var(--space-5) 0;
    padding-bottom: calc(var(--space-5) + env(safe-area-inset-bottom));
    color: var(--color-muted);
    font-size: 0.875rem;
  }

  .footer-inner {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    justify-content: space-between;
    align-items: center;
  }

  .left,
  .right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-3);
  }

  a {
    color: var(--color-muted);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-orange);
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    min-height: 36px;
  }

  .sep {
    color: var(--color-border);
  }

  @media (max-width: 600px) {
    .chapter {
      display: none;
    }

    .sep {
      display: none;
    }

    .footer-inner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
