<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";

  let name = "Something...";
  let h1;

  function moreDot() {
    name += ".";
  }

  beforeUpdate(() => {
    console.log("Before update!");
    console.log(h1 && h1.innerText);
  });

  afterUpdate(() => {
    console.log("After update!");
    console.log(h1.innerText);
  });

  onMount(() => {
    console.log("Mounted!");
    h1 = document.querySelector("h1");

    // onMount가 반환하는 함수는 컴포넌트가 연결 해제될 때 실행됨. 즉 onDestory와 같은 역할. onDestroy보다 나중에 실행됨.
    // return () => {
    //   console.log("Destroy in mount");
    // };
  });

  onDestroy(() => {
    console.log("Before Destroy");
    const h1 = document.querySelector("h1");
    console.log(h1.innerText);
  });
</script>

<h1 on:click={moreDot}>{name}</h1>
