import { createStore } from "redux";

//action types
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const ADD = "add";
const REDUCEBY = "reduceby";

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

const add = value => ({
  type: ADD,
  value
});

const reduceby = value => ({
  type: REDUCEBY,
  value
});

//initial state value for reset function
const initialValue = 0;

//predicates
const predicates = {
  [INCREMENT]: state => state + 1,
  [DECREMENT]: state => state - 1,
  [RESET]: () => initialValue,
  [ADD]: (state, { value }) => state + value,
  [REDUCEBY]: (state, { value }) => state - value
};

//reducer warmup function ;-)
const identity = x => x;

//REDUCER BE LIKE : (oldState, action) => newState, now all i do is fixing predicates :D
function counterReducer(state = initialValue, action) {
  return (predicates[action.type] || identity)(state, action);
}

//this is how to createStore ;-)
export const store = createStore(counterReducer);

//store destructurisation
const { getState, dispatch } = store;

//some dummy actions for checking in console if everything is gucci
console.log(getState()); //0 <--expected
dispatch(incrementAction);
console.log(getState()); //1 <--expected
dispatch(incrementAction);
console.log(getState()); //2 <--expected
dispatch(decrementAction);
console.log(getState()); //1 <--expected
dispatch(resetAction);
console.log(getState()); //0 <--expected
dispatch(add(10231));
console.log(getState()); //10231 <--expected
dispatch(reduceby(5123));
console.log(getState()); //5108 <--expected
