<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import Events from "./Events.svelte";
</script>

<Router>
  <Route component={Home} path="/" />
  <Route component={Events} path="/events" />
</Router>
