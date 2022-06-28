<script>
	import Fruits from './Fruits.svelte'
	let fruits = ['apple', 'banana', 'cherry', 'orange', 'mango']
</script>

<Fruits {fruits}/>
<Fruits {fruits} reverse />
<Fruits {fruits} slice="-2"/>
<Fruits {fruits} slice="0, 3"/>