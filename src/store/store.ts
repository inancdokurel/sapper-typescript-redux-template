import { createStore } from "redux";
import { bindTracked } from "svelte3-redux";

const initialState = {
	count: 0,
	text: "hello",
};

const reducer = (state = initialState, action:any) => {
	switch (action.type) {
	case "increment": return { ...state, count: state.count + 1 };
	case "decrement": return { ...state, count: state.count - 1 };
	case "setText": return { ...state, text: action.text };
	default: return state;
	}
};

const store = createStore(reducer);
export default () => bindTracked(store);
