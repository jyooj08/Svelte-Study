<script>
  import { onMount } from "svelte";

  import Heropy from "./Heropy.svelte";

  let heropy;

  onMount(() => {
    console.log(heropy);
  });
</script>

<Heropy title="Good!" bind:this={heropy} />
