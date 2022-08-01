import { derived, readable, writable } from "svelte/store";

export let count = writable(1);
export let double = derived(count, ($count) => $count * 2);
export let user = readable({
  name: "Heropy",
  age: 22,
  email: "aaa@gmail.com",
});
