<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let count: number;
    export let text: string;
    const dispatch = createEventDispatcher();

    function increment() {
        dispatch("increment");
    }
    function decrement() {
        dispatch("decrement");
    }
    function setText(value: string) {
        dispatch("setText", { value });
    }
</script>

<style>
    h1 {
        color: #3f83f8;
        font-size: 1.875rem;
        font-weight: 200;
        margin: 0;
    }

    p {
        color: #374151;
        margin: 0;
        margin-top: 1rem;
    }
</style>

<br />
<h1>Counter</h1>
<br />
<div>
    <div>
        <span>Count: {count}</span>
        <button on:click={increment}>+1</button>
        <button on:click={decrement}>-1</button>
    </div>
</div>

<br />
<h1>TextBox</h1>
<br />
<div>
    <div>
        <span>Text: {text}</span>
        <input value={text} on:input={(event) => setText(event.target.value)} />
    </div>
</div>
