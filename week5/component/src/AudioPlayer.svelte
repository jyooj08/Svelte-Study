<script context="module">
  const players = new Set();

  export function stopAll() {
    players.forEach((p) => p.pause());
  }
</script>

<script>
  import { onMount } from "svelte";

  export let src;
  let player;

  onMount(() => {
    players.add(player);
  });
</script>

<div>
  <audio {src} bind:this={player} controls>
    <track kind="captions" />
  </audio>
</div>
