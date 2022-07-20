<script context="module">
  export let count = 0;
</script>

<script>
  export let fruit;
</script>

<div
  on:click={() => {
    count++;
  }}
>
  {fruit}
</div>
