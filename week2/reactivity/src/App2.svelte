<script>
  // 일반 javascript
  loop1: for (let i = 0; i < 3; i++) {
    loop2: for (let j = 0; j < 3; j++) {
      if (i === 2) {
        break loop1;
      }
      console.log(`${i}-${j}`);
    }
    console.log("---------");
  }

  heropy: {
    console.log("a");
    break heropy;
    console.log("b");
  }

  // svelte 반응성 구문
  let count = 0;
  $: {
    console.log(count);
  }
</script>
