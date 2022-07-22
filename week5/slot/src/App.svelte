<script>
  import UserCard from "./UserCard.svelte";
</script>

<UserCard>
  <h2 slot="name">HEROPY</h2>
  <div slot="age">85</div>
  <div slot="email">aaa@gmail.com</div>
</UserCard>

<UserCard>
  <h2 slot="name">Neo</h2>
  <div slot="email">neo@gmail.com</div>
</UserCard>

<UserCard>
  <h2 slot="name">Evan</h2>
</UserCard>
