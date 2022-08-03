<!-- document.head -->
<svelte:head>
  <!-- runtime에 추가되기 때문에 상대경로 사용하면 해석할 수 없음, index.html 주변에 작성해야 함 -->
  <link rel="stylesheet" href="./main.css" />
</svelte:head>

<!-- document.body -->
<svelte:body on:mousemove={(e) => console.log(e.clientX, e.clientY)} />

<h1>Heropy</h1>
