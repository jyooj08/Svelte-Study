<script>
  import { user } from "./store2";

  console.log(user);
  console.log($user);
</script>

<!-- error -->
<button
  on:click={() => {
    $user.name = "Neo";
  }}>Click!</button
>

<h2>{$user.name}</h2>
