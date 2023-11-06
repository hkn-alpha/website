<script>
  import { Router, Route } from "svelte-routing";
  import StudentServices from "../src/pages/StudentServices.svelte";
</script>

<Router>
  <Route component={StudentServices} path="/" />
</Router>
