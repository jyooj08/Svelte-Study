import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
import { writable } from "svelte/store";

export function lifecycle() {
  onMount(() => {
    console.log("onMounted?");
  });
  onDestroy(() => {
    console.log("Before destory?");
  });
  beforeUpdate(() => {
    console.log("Before update?");
  });
  afterUpdate(() => {
    console.log("After update?");
  });
}

export function delayRender(delay = 3000) {
  let render = writable(false);
  onMount(() => {
    setTimeout(() => {
      // $render = true;
      render.set(true);
    }, delay);
  });
  return render;
}
