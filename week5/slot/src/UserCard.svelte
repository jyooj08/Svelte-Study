<script>
  console.log($$slots);
</script>

<div class="user-card">
  <slot name="name" />
  {#if $$slots.age}
    <hr />
    <slot name="age" />
  {/if}
  {#if $$slots.email}
    <hr />
    <slot name="email" />
  {/if}
</div>

<style>
  .user-card {
    width: 300px;
    margin: 20px 10px;
    padding: 0 10px 20px;
    border: 4px solid lightgray;
    border-radius: 10px;
  }
</style>
