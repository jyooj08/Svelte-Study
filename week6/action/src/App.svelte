<script>
  let toggle = true;
  let width = 200;
  function hello(node, options = {}) {
    const { width, height, color } = options;
    console.log(node);
    node.style.width = width || "100px";
    node.style.height = height || "100px";
    node.style.backgroundColor = color || "tomato";

    return {
      update(opts) {
        console.log("update!", opts);
        node.style.width = opts.width;
      },
      destroy() {
        console.log("destroy!");
      },
    };
  }
</script>

<button on:click={() => (toggle = !toggle)}>Toggle</button>
<button on:click={() => (width += 20)}>Size up</button>

<div use:hello />

{#if toggle}
  <div
    use:hello={{ width: `${width}px`, height: "70px", color: "royalblue" }}
  />
{/if}
