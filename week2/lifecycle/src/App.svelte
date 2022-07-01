<script>
  import { delayRender, lifecycle } from "./lifecycle.js";
  import Something2 from "./Something2.svelte";

  let done = delayRender();
  lifecycle();
</script>

{#if $done}
  <h1>Hello lifecycle!</h1>
{/if}

<Something2 />
