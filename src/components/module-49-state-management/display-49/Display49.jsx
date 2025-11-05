import {StaticCounter, InteractiveCounter, ToggleSwitch} from "../Counter/counter";
import './Display49.css'

export default function DisplayCounters() {
  return (
    <div className='container'>
      <h2>Module 49 - State Management</h2>
      <StaticCounter />
      <InteractiveCounter />
      <ToggleSwitch />
    </div>
  );
}
