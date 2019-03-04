import { createStore } from "redux";

//action types
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const ADD = "add";
const REDUCEBY = "reduceby";

//actions
export const incrementAction = {
  type: INCREMENT
};

export const decrementAction = {
  type: DECREMENT
};

export const resetAction = {
  type: RESET
};

export const add = value => ({
  type: ADD,
  value
});

export const reduceby = value => ({
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
const { getState, dispatch, subscribe } = store;

//subscribe for changes
subscribe(() => console.log("current state is :", getState()));

//some dummy actions for checking in console if everything is gucci, now fixed to array ;D
const actions = [
  incrementAction,
  incrementAction,
  decrementAction,
  add(100),
  resetAction,
  reduceby(50),
  resetAction
];

//actions launcher (used short hand notation here) ==> works same way as  === > actions.forEach(action => dispatch(action))
actions.forEach(dispatch);
