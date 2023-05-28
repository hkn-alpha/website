<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import StudentServices from "./pages/StudentServices.svelte";
</script>

<Router>
  <Route component={Home} path="/" />
  <Route component={StudentServices} path="/services" />
</Router>
