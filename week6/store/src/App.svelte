<script>
  import { count, double, user } from "./store4";
  import { get } from "svelte/store";

  console.log(get(count));
  console.log(get(double));
  console.log(get(user));
</script>
