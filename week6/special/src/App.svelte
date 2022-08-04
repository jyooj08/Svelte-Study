<script>
  import Neo from "./Neo.svelte";

  let neo;
  function handler() {
    console.log(neo);
    console.log(neo.name);
    console.log(neo.getAge());
  }
</script>

<button on:click={handler}>Toggle</button>
<Neo bind:this={neo} />
