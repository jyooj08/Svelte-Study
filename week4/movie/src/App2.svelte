<script>
  // let promise = new Promise((resolve) => resolve("Hmm..."));
  let promise = Promise.resolve("Hmm...");
  let isError = false;

  function fetchName() {
    return new Promise((resolve, reject) => {
      if (isError) {
        reject(new Error("Sorry..."));
      }
      setTimeout(() => {
        resolve("Heropy");
      }, 1000);
    });
  }
</script>

<button
  on:click={() => {
    promise = fetchName();
  }}>Fetch name!</button
>

{#await promise}
  <!-- 대기(Pending) -->
  <p>Loading...</p>
{:then name}
  <!-- 이행(Fulfilled) -->
  <h1>{name}</h1>
{:catch err}
  <!-- 거부(Rejected) -->
  <p>{err.message}</p>
{/await}
