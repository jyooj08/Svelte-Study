<svelte:options accessors />

<script>
  let age = 22;
  export let name = "Neo";
  export function getAge() {
    console.log(age);
  }
</script>

<h1 on:click={getAge}>{name}!</h1>
