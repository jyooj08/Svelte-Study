<script>
  import { onDestroy, onMount } from "svelte";

  onMount(() => {
    console.log("Mounted!");

    // onMount가 반환하는 함수는 컴포넌트가 연결 해제될 때 실행됨. 즉 onDestory와 같은 역할. onDestroy보다 나중에 실행됨.
    return () => {
      console.log("Destroy in mount");
    };
  });

  onDestroy(() => {
    console.log("Before Destroy");
    const h1 = document.querySelector("h1");
    console.log(h1.innerText);
  });
</script>

<h1>Something ...</h1>
