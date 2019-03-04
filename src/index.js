import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  store,
  incrementAction,
  decrementAction,
  resetAction,
  add,
  reduceby
} from "./duck/counter";

class CounterApp extends Component {
  state = {
    counterValue: store.getState()
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      let counterValue = store.getState();
      this.setState({ counterValue });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleAction = (event, act) => {
    console.log(event.key);
    if (event.key === "Enter") {
      store.dispatch(act(parseInt(event.target.value) || 0));
      event.target.value = "";
    }
  };

  render() {
    const { counterValue } = this.state;
    return (
      <div>
        <h1>Counter Value: {counterValue}</h1>
        <button onClick={() => store.dispatch(incrementAction)}>
          Increment counter value
        </button>
        <button onClick={() => store.dispatch(decrementAction)}>
          Decrement counter value
        </button>
        <button onClick={() => store.dispatch(resetAction)}>
          Reset counter value
        </button>
        <div>
          <label>adding field, submit on enter</label>
          <input
            type="number"
            onKeyUp={event => this.handleAction(event, add)}
          />
        </div>
        <div>
          <label>reducing field, submit on enter</label>
          <input
            type="number"
            onKeyUp={event => this.handleAction(event, reduceby)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CounterApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
