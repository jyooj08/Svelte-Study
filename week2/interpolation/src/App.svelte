<script>
  let href = "https://velog.io/@jyooj08";
  let name = "Yujin";
  let value = "New input value!";
  let isUpperCase = false;
</script>

<!-- <a href="https://velog.io/@jyooj08">Yujin</a> -->

<a {href}>{name}</a>

<!-- <input type="text" value="Default value.." /> -->

<!-- input의 기본 type값은 text이므로 생략 가능 -->
<input
  {value}
  on:input={(e) => {
    value = e.target.value;
  }}
/>
<input bind:value />

<div>{isUpperCase ? "DIV" : "div"}</div>
