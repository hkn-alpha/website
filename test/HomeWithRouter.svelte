<script>
  import { Router, Route } from "svelte-routing";
  import Home from "../src/pages/Home.svelte";
</script>

<Router>
  <Route component={Home} path="/" />
</Router>
