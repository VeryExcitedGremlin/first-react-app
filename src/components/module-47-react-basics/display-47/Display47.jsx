import { HelloWorld, HelloWorldInline } from "../HelloWorld/HelloWorld";

export default function DisplayHello() {
  return (
    <div className="container">
      <h1>Module 47 - Intro to React</h1>
      <p>
        Each line is made by reusing the same function with strings passed for
        the name variable. If no string is passed, the default is "World"
      </p>
      <p>Elements can be styled multiple ways!</p>
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
    </div>
  );
}
