<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./Home.svelte";
</script>

<Router>
  <Route component={Home} path="/" />
</Router>
