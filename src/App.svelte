<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import StudentServices from "./pages/StudentServices.svelte";
  import FourOhFour from "./pages/FourOhFour.svelte";
  import Sponsors from "./pages/Sponsors.svelte"
</script>

<Router>
  <Route component={Home} path="/" />
  <Route component={StudentServices} path="/services" />
  <Route component={FourOhFour} path="/*" />
  <Route component={Sponsors} path="/Sponsors" />
</Router>
