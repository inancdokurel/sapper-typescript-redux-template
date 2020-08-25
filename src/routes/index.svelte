<script>
    import CounterComponent from "./../components/CounterComponent.svelte";
    import TitleComponent from "../components/TitleComponent.svelte";
    import { createStore } from "redux";
    import { bind } from "svelte3-redux";
    const initialState = {
        count: 0,
        text: "hello",
    };

    const reducer = (state = initialState, action: any) => {
        switch (action.type) {
            case "increment":
                return { ...state, count: state.count + 1 };
            case "decrement":
                return { ...state, count: state.count - 1 };
            case "setText":
                return { ...state, text: action.text };
            default:
                return state;
        }
    };

    const store = createStore(reducer);
    const state = bind(store);

    function increment() {
        state.dispatch({ type: "increment" });
    }
    function decrement() {
        state.dispatch({ type: "decrement" });
    }
    function setText(event: CustomEvent) {
        state.dispatch({
            type: "setText",
            text: event.detail.value,
        });
    }
</script>

<style>
    .centerer {
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .button {
        margin-top: 2.5rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition-property: background-color, color, box-shadow;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        text-decoration: none;
    }

    .button:focus {
        outline: 0;
        box-shadow: 0 0 0 3px rgba(118, 169, 250, 0.45);
    }

    .button-pink {
        color: #99154b;
        background-color: #fad1e8;
    }

    .button-pink:hover,
    .button-pink:focus {
        background-color: #f8b4d9;
    }
</style>

<div class="centerer">
    <TitleComponent
        title="🌐 Sapper with TypeScript and Redux project base"
        paragraph="This is an example route and component to make sure
        everything's working." />
    <a class="button button-pink" href="/">Check out this button!</a>
    <CounterComponent
        count={$state.count}
        text={$state.text}
        on:setText={(value) => setText(value)}
        on:increment={increment}
        on:decrement={decrement} />

</div>
