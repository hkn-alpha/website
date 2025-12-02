<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import StudentServices from "./pages/StudentServices.svelte";
  import FourOhFour from "./pages/FourOhFour.svelte";
  import Sponsors from "./pages/sponsers.svelte"
  import Howtojoin from "./pages/howtojoin.svelte";
</script>

<Router>
  <Route component={Home} path="/" />
  <Route component={StudentServices} path="/services" />
  <Route component={FourOhFour} path="/*" />
  <Route component={Sponsors} path = "/sponsors"/>
  <Route component={Howtojoin} path="/howtojoin"/>
</Router>
