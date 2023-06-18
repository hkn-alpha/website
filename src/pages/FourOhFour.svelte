<script>
  import { Link } from "svelte-routing";

  function buf2hex(buffer) {
    // buffer is an ArrayBuffer
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
      (gdb) <Link to="/" color="white" style={"color: white !important;"}
        >go home</Link
      >
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
    background-color: #000;
    min-width: 100vw;
    min-height: 100vh;
    color: white;
    font-family: "Courier New", Courier, monospace;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .s1 {
    /* animation-duration: 0.01s;
    animation-delay: 10s;
    animation-name: appear; */
    animation: 0.01s ease 0s normal forwards 1 appear;
  }

  .s2 {
    animation: 0.3s ease 0s normal forwards 1 appear;
  }

  .s3 {
    animation: 0.5s ease 0s normal forwards 1 appear;
  }

  .s4 {
    animation: 0.6s ease 0s normal forwards 1 appear;
  }

  .s5 {
    animation: 0.6s ease 0s normal forwards 1 appear;
  }

  .s6 {
    animation: 0.6s ease 0s normal forwards 1 appear;
  }
</style>
