import { Link } from "react-router";
import "./HiddenNav.css";

export default function HiddenNavigation() {
  return (
    <div className="container">
      <h1>How did you get here???</h1>
      <h2>Pick somewhere else to be</h2>
      <nav>
        <li>
          <Link to="/first-react-app/47">React Components</Link>
        </li>
        <li>
          <Link to="/first-react-app/49">Interactive React Components</Link>
        </li>
      </nav>
    </div>
  );
}
