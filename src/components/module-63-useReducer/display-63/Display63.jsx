import ReducerCounter from "../ReducerCounter";
import './Display63.css'

export default function DisplayReducer() {
    return (
      <div className="container">
        <h2>Module 61 - useReducer</h2>
        <ReducerCounter />

        <div className="explanation">
          <h3>How it works:</h3>
          <ol>
            <li>
              We define an initial state object: <code>{`{ count: 0 }`}</code>
            </li>
            <li>We create a reducer function that handles different actions</li>
            <li>
              We use <code>useReducer(counterReducer, initialState)</code>
            </li>
            <li>
              We dispatch actions like <code>{`{ type: 'INCREMENT' }`}</code>
            </li>
            <li>The reducer updates the state based on the action type</li>
          </ol>
        </div>
      </div>
    );
}