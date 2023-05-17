<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import StudentServices from "./StudentServices.svelte";
</script>

<Router>
  <Route component={Home} path="/" />
  <Route component={StudentServices} path="/services" />
</Router>
