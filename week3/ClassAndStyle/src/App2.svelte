<script>
  let active = true;
  let valid = false;
  let camelCase = true;

  function multi() {
    return "active multiple-class";
  }
</script>

<div class={active ? "active" : ""}>3항 연산자 보간</div>

<div class:hello={active}>Class 지시어 (directive) 바인딩</div>

<div class:active>Class 지시어 바인딩 단축 형태</div>

<div class:active class:valid class:camelCase class:camel-case={camelCase}>
  다중(multiple) Class 지시어 바인딩
</div>

<div class={multi()}>함수 실행</div>
