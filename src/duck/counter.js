import { createStore } from "redux";

//action types

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

//initial state value for reset function
const initialValue = 0;

//predicates
const predicates = {
  [INCREMENT]: state => state + 1,
  [DECREMENT]: state => state - 1,
  [RESET]: () => initialValue
};

//reducer warmup function ;-)
const identity = x => x;

//REDUCER BE LIKE : (oldState, action) => newState
function counterReducer(state = initialValue, action) {
  return (predicates[action.type] || identity)(state, action);
}

export const store = createStore(counterReducer);

const { getState, dispatch } = store;

console.log(getState());
dispatch(incrementAction);
console.log(getState());
dispatch(incrementAction);
console.log(getState());
dispatch(decrementAction);
console.log(getState());
dispatch(resetAction);
console.log(getState());
