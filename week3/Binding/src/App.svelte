<script>
  import { text } from "svelte/internal";

  let innerHTML = "";
  let textContent = "Hello World!";
</script>

<div contenteditable bind:innerHTML bind:textContent />

<div>{innerHTML}</div>
<div>{textContent}</div>
<div>{@html innerHTML}</div>

<style>
  div {
    border: 1px solid tomato;
    margin-bottom: 10px;
  }
</style>
