import { useState } from "react";

export function StaticCounter() {
  const count = 0; //never changes!

  return (
    <>
      <div className="center">
        <h3>Count: {count}</h3>
        <div>
          <button className='btn-49'>-</button> {/* Does nothing! */}
          <button className='btn-49'>+</button>
        </div>
      </div>
    </>
  );
}

export function InteractiveCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="center">
        <h3>Count: {count}</h3>
        <div>
          <button className='btn-49' onClick={() => setCount(count - 1)}>-</button>
          <button className='btn-49' onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </>
  );
}

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div className="center">
        <h4>The Switch is {isOn ? "ON" : "OFF"}</h4>
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <button className='btn-49' id="switch" onClick={() => setIsOn(!isOn)}>
            <strong>{isOn ? "ON" : "OFF"}</strong>
          </button>
        </div>
      </div>
    </>
  );
}
