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

const initialValue = 0;

//REDUCER BE LIKE : (oldState, action) => newState
function counterReducer(state = initialValue, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  }
  if (action.type === DECREMENT) {
    return state - 1;
  }
  if (action.type === RESET) {
    return initialValue;
  }
  return state;
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
