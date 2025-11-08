import { Link } from "react-router";
import "./Nav.css";

export default function Navigation({ isLoggedIn, onLogout }) {
  return (
    <div className="container">
      <h2>This technically just updates the same page!!!</h2>
      <h3>Pick somewhere else to be:</h3>
      <nav>
        <li>
          <Link className="nav" to="/first-react-app/47">
            React Components
          </Link>
        </li>
        <li>
          <Link className="nav" to="/first-react-app/49">
            Interactive React Components
          </Link>
        </li>
        <li>
          <Link className="nav" to="/first-react-app/60">
            Protected Links
          </Link>
        </li>
        <li>
          <Link className="nav" to="/first-react-app/63">
            useReducer
          </Link>
        </li>
      </nav>
    </div>
  );
}
