import {StaticCounter, InteractiveCounter, ToggleSwitch} from "../Counter/counter";
import './Display49.css'

export default function DisplayCounters() {
  return (
    <div className='container'>
      <h1>Module 49 - State Management</h1>
      <StaticCounter />
      <InteractiveCounter />
      <ToggleSwitch />
    </div>
  );
}
