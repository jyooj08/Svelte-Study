<script>
  function clickHandler(event) {
    console.log(event.currentTarget);
  }

  function wheelHandler(event) {
    console.log(event);
  }
</script>

<section>
  <!-- 기본 동작 방지 -->
  <h2>preventDefault</h2>
  <a
    href="https://naver.com"
    target="_blank"
    on:click|preventDefault={clickHandler}
  >
    Naver</a
  >
</section>

<section>
  <!-- 최초 실행 후 핸들러 삭제 -->
  <h2>Once</h2>
  <a
    href="https://naver.com"
    target="_blank"
    on:click|preventDefault|once={clickHandler}
  >
    Naver</a
  >
</section>

<section>
  <!-- 이벤트 버빌링 방지 -->
  <h2>stopPropagation</h2>
  <div class="parent" on:click={clickHandler}>
    <div class="child" on:click|stopPropagation={clickHandler} />
  </div>
</section>

<section>
  <!-- 캡처링에서 핸들러 실행 -->
  <h2>capture</h2>
  <div class="parent" on:click|capture={clickHandler}>
    <div class="child" on:click={clickHandler} />
  </div>
</section>

<section>
  <!-- event의 target과 currentTarget이 일치하는 경우 핸들러 실행 -->
  <h2>self</h2>
  <div class="parent" on:click|self={clickHandler}>
    <div class="child" />
  </div>
</section>

<section>
  <!-- 이벤트 처리를 완료하지 않고도 기본 속도로 화면을 스크롤 -->
  <h2>passive</h2>
  <div class="parent wheel" on:wheel|passive={wheelHandler}>
    <div class="child" />
  </div>
</section>
