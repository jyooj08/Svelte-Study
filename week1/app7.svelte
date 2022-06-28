<script>
	import {storeName} from './store.js';
	import Parent from './Parent.svelte'
	let name = 'world';
	$storeName = name;
</script>

<h1>Hello {name}!</h1>
<Parent />