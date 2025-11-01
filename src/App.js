import "./App.css";
import HelloWorldInline from "./HelloWorld/HelloWorld";
import { HelloWorld } from "./HelloWorld/HelloWorld";
import {
  StaticCounter,
  InteractiveCounter,
  ToggleSwitch,
} from "./Counter/counter";
import { PersonalFooter } from "./Footer/personal-footer";

function App() {
  return (
    <>
      <div className='container' id='top'>
        <h1>Module 47 - Intro to React</h1>
        <h2>Inline Styles</h2>
        <div>
          <HelloWorldInline />
          <HelloWorldInline name="Alice" />
          <HelloWorldInline name="Bob" />
          <HelloWorldInline name="Jane" />
        </div>
        <h2>CSS Stylesheet</h2>
        <div>
          <HelloWorld />
          <HelloWorld name="Alice" />
          <HelloWorld name="Bob" />
          <HelloWorld name="Jane" />
        </div>

        <h1>Module 49 - State Management</h1>
        <StaticCounter />
        <InteractiveCounter />
        <ToggleSwitch />
      </div>
      <PersonalFooter />
    </>
  );
}

export default App;
