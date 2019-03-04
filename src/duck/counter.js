import { createStore } from "redux";

//aciton types
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

//actions
const incrementAction = {
  type: INCREMENT
};

const decrementAction = {
  type: DECREMENT
};

const resetAction = {
  type: RESET
};

//predicates for reducer
const predicates = {
  [INCREMENT]: state => state + 1,
  [DECREMENT]: state => state - 1,
  [RESET]: () => initialState
};

//initial state value
const initialState = 10;

//for reducer initial run
const warmup = x => x;

//reducer (oldState, action) => newState
function counterReducer(state = initialState, action) {
  return (predicates[action] || warmup)(state, action);
}

export const store = createStore(counterReducer);

console.log(store.getState());
store.dispatch(decrementAction);
console.log(store.getState());
