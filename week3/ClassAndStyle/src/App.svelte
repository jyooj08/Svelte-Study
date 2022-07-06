<div class="box" />

<style>
  :global(body) {
    padding: 60px;
  }
  .box {
    width: 100px;
    height: 100px;
    background-color: tomato;
    border-radius: 10px;
    animation: zoom 0.5s infinite alternate;
  }

  /* 전역화됨 -> 다른 svelte 파일에서도 사용 가능 */
  @keyframes -global-zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
</style>
