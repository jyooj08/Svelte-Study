<script>
  import { onDestroy } from "svelte";

  import { count, name } from "./store";

  //   let number, userName;
  //   const unsubscribeCount = count.subscribe((c) => {
  //     number = c;
  //   });
  //   const unsubscribeCount2 = count.subscribe(() => {});
  //   const unsubscribeName = name.subscribe((n) => {
  //     userName = n;
  //   });

  function increase() {
    $count++;
  }

  function changeName() {
    $name = "Neo";
  }

  //   onDestroy(() => {
  //     unsubscribeCount();
  //     unsubscribeCount2();
  //   });
</script>

<button on:click={increase} on:click={changeName}> Click me! </button>

<h2>{$count}</h2>
<h2>{$name}</h2>
