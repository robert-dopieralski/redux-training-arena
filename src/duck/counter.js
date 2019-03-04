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

//this is how to createStore ;-)
export const store = createStore(counterReducer);

//store destructurisation
const { getState, dispatch } = store;

//some dummy actions for checking in console if everything is gucci
console.log(getState());
dispatch(incrementAction);
console.log(getState());
dispatch(incrementAction);
console.log(getState());
dispatch(decrementAction);
console.log(getState());
dispatch(resetAction);
console.log(getState());
