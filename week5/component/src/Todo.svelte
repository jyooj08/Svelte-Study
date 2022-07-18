<script>
  export let todos, todo, index;

  function deleteTodo() {
    todos.splice(index, 1);
    todos = todos;
  }
</script>

<div>
  <input type="checkbox" bind:value={todo.done} />
  {todo.title}
  <button on:click={deleteTodo}>X</button>
</div>
