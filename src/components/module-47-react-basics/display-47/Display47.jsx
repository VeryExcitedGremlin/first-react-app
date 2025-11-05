import { HelloWorld, HelloWorldInline } from "../HelloWorld/HelloWorld";

export default function DisplayHello() {
  return (
    <div className="container">
      <h2>Module 47 - Intro to React</h2>
      <p>
        Each line is made by reusing the same function with strings passed for
        the name variable. If no string is passed, the default is "World"
      </p>
      <p>Elements can be styled multiple ways!</p>
      <h3>Inline Styles</h3>
      <div>
        <HelloWorldInline />
        <HelloWorldInline name="Alice" />
        <HelloWorldInline name="Bob" />
        <HelloWorldInline name="Jane" />
      </div>
      <h3>CSS Stylesheet</h3>
      <div>
        <HelloWorld />
        <HelloWorld name="Alice" />
        <HelloWorld name="Bob" />
        <HelloWorld name="Jane" />
      </div>
    </div>
  );
}
