<script>
  let domain = "xyz.com";
</script>

<div class="card">
  <slot name="name">!!</slot>
  <slot name="age">??</slot>
  <slot name="email" {domain} hello="world">%%</slot>
</div>

<style>
  .card {
    margin: 20px;
    padding: 12px;
    border: 1px solid gray;
    border-radius: 10px;
  }
</style>
