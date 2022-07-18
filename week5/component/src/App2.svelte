<script>
  import App1 from "./App1.svelte";
  import Heropy from "./Heropy.svelte";
  import Counter from "./lib/Counter.svelte";
  import User from "./User.svelte";

  let users = [
    { name: "Neo", age: 3, email: "neo@abc.com" },
    { name: "Lewis", age: 5, email: "lewis@abc.com" },
    { name: "Evan", age: 10 },
  ];
</script>

<section>
  {#each users as user}
    <User name={user.name} age={user.age} email={user.email} />
  {/each}
</section>

<section>
  {#each users as { name, age, email }}
    <User {name} {age} {email} />
  {/each}
</section>

<section>
  {#each users as user}
    <User {...user} />
  {/each}
</section>

<style>
  section {
    border: 1px solid orange;
  }
</style>
