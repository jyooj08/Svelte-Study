<script>
  import App from "./App.svelte";
  import App1 from "./App1.svelte";

  export let value;
  export let color;
</script>

<div class="my-custom-input">
  <input type="text" bind:value {...$$restProps} style="color: {color}" />
</div>

<style>
  .my-custom-input {
    border-radius: 100px;
    padding: 10px 20px;
  }
</style>
