import { useState } from "react";

export function StaticCounter() {
  const count = 0; //never changes!

  return (
    <>
      <h3>Static Counter - This Does Nothing</h3>
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
      <h3>Interactive Counter - This Counts</h3>
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
      <h3>Switch - Click to turn ON or OFF</h3>
      <div className="center">
        <h4>The Switch is {isOn ? "ON" : "OFF"}</h4>
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <button id="switch" onClick={() => setIsOn(!isOn)}>
            <strong>{isOn ? "ON" : "OFF"}</strong>
          </button>
        </div>
      </div>
    </>
  );
}
