import { useState } from "react";

export function StaticCounter() {
  const count = 0; //never changes!

  return (
    <>
      <h2>Static Counter - This Does Nothing</h2>
      <div className="center">
        <h3>Count: {count}</h3>
        <div>
          <button>-</button> {/* Does nothing! */}
          <button>+</button>
        </div>
      </div>
    </>
  );
}

export function InteractiveCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Interactive Counter - This Counts</h2>
      <div className="center">
        <h3>Count: {count}</h3>
        <div>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </>
  );
}

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h2>Switch - Click to turn ON or OFF</h2>
      <div className="center">
        <h3>The Switch is {isOn ? "ON" : "OFF"}</h3>
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <button id="switch" onClick={() => setIsOn(!isOn)}>
            <strong>{isOn ? "ON" : "OFF"}</strong>
          </button>
        </div>
      </div>
    </>
  );
}
