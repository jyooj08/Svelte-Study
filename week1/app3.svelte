<script>
	let name = 'fruits';
	let fruits = ['apple', 'banana', 'cherry', 'orange', 'mango']
	
	function deleteFruit(){
		fruits = fruits.slice(1);
	}
</script>

<h1>Hello {name}!</h1>

<ul>
	{#each fruits as fruit}
	<li>{fruit}</li>
	{/each}
</ul>

<button on:click={deleteFruit}>
	Eat it!
</button>