import { useReducer } from "react";

export default function ReducerCounter() {
  // Step 1: Define the initial state
  // This is just a simple object with a count property
  const initialState = {
    count: 0,
  };

  // Step 2: Create the reducer function
  // A reducer takes the current state and an action, then returns the new state
  function counterReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          count: state.count - 1,
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  }

  // Step 3: Use the useReducer hook
  // It gives us the current state and a dispatch function to send actions
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Step 4: Create functions that dispatch actions
  // These functions are called when buttons are clicked
  function handleIncrement() {
    dispatch({ type: "INCREMENT" });
  }
  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }
  function handleReset() {
    dispatch({ type: "RESET" });
  }

  return (
    <>
      <div className="counter-display">
        <h3>Count: {state.count}</h3>
      </div>
      <div className="button-group">
        <button onClick={handleIncrement} className="btn btn-increment">
          Add 1
        </button>
        <button onClick={handleDecrement} className="btn btn-decrement">
          Subtract 1
        </button>
        <button onClick={handleReset} className="btn btn-reset">
          Reset to 0
        </button>
      </div>

      <div className="code-preview">
        <h3>Current State:</h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </>
  );
}
