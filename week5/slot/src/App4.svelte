<script>
  import Wrap from "./Wrap.svelte";

  let fruits = {
    apple: {
      value: "",
      options: {
        readonly: false,
        disabled: false,
        placeholder: "AA",
      },
    },
    banana: {
      value: "BANANA",
      options: {
        disabled: false,
        placehoder: "AA",
      },
    },
  };

  function add(name) {
    console.log(name);
  }
</script>

<label class="fruits__apple" name="apple">
  <input
    bind:value={fruits.apple.value}
    readonly={fruits.apple.options.readonly}
    disabled={fruits.apple.options.disabled}
    placeholder={fruits.apple.options.placeholder}
    on:change={() => add("apple")}
  />
</label>

<Wrap scopeName="apple" let:_name>
  <label class="fruits__{_name}" name={_name}>
    <input
      bind:value={fruits[_name].value}
      readonly={fruits[_name].options.readonly}
      disabled={fruits[_name].options.disabled}
      placeholder={fruits[_name].options.placeholder}
      on:change={() => add({ _name })}
    />
  </label>
</Wrap>

<Wrap scopeName="banana" let:_name>
  <label class="fruits__{_name}" name={_name}>
    <input
      bind:value={fruits[_name].value}
      readonly={fruits[_name].options.readonly}
      disabled={fruits[_name].options.disabled}
      placeholder={fruits[_name].options.placeholder}
      on:change={() => add({ _name })}
    />
  </label>
</Wrap>
