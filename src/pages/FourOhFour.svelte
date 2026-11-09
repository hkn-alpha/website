<script>
  import { Link } from "svelte-routing";

  function buf2hex(buffer) {
    return [...new Uint8Array(buffer)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
  }
  let enc = new TextEncoder();
  const path = buf2hex(enc.encode(window.location.pathname.slice(1)));
</script>

<main>
  <div class="gdb">
    <div class="s1">(gdb) run</div>
    <div class="s2">Starting program: /usr/bin/hkn</div>
    <div class="s3">Program received signal SIGSEGV, Segmentation fault.</div>
    <div class="s4">
      0xda3214bcd in main (argc=1, argv=0x{path}) at ui.c:42
    </div>
    <div class="s5">
      42
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Path
      p = paths[argv[0]];
    </div>
    <div class="s6">
      (gdb)
      <Link to="/" class="home-link">go home</Link>
    </div>
  </div>
</main>

<style>
  @keyframes appear {
    0% {
      visibility: hidden;
    }
    99% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }

  main {
    background-color: #111;
    min-width: 100vw;
    min-height: 100vh;
    color: #f5f5f4;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    margin: 0;
    padding: var(--space-5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .gdb {
    max-width: 640px;
    width: 100%;
  }

  .s1 {
    animation: 0.01s ease 0s normal forwards 1 appear;
  }
  .s2 {
    animation: 0.3s ease 0s normal forwards 1 appear;
  }
  .s3 {
    animation: 0.5s ease 0s normal forwards 1 appear;
  }
  .s4,
  .s5,
  .s6 {
    animation: 0.6s ease 0s normal forwards 1 appear;
  }

  :global(.home-link) {
    color: var(--color-orange) !important;
    text-decoration: underline !important;
  }

  :global(.home-link:hover) {
    color: #fff !important;
  }
</style>
