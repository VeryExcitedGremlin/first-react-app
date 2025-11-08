import {StaticCounter, InteractiveCounter, ToggleSwitch} from "../Counter/counter";
import './Display49.css'

export default function DisplayCounters() {
  return (
    <div className="container">
      <h2>Module 49 - State Management</h2>
      <h3>Static Counter - This Does Nothing</h3>
      <StaticCounter />
      <h3>Interactive Counter - This Counts</h3>
      <InteractiveCounter />
      <h3>Switch - Click to turn ON or OFF</h3>
      <ToggleSwitch />
    </div>
  );
}
