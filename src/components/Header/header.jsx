import { useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function Header({ isLoggedIn, onLogout, username }) {
  const location = useLocation();

  return (
    <div className="container">
      <h1>This is all the same HTML page</h1>
      <p>React only redraws what changes!</p>
      {
        <div className="nav-auth">
          {isLoggedIn ? (
            <>
              <button onClick={onLogout} className="btn-logout nav">
                Logout
              </button>
              <p>Welcome back {username}!</p>
            </>
          ) : (
            location.pathname !== "/first-react-app/61" && (
              <Link to="/first-react-app/61" className="btn-login nav">
                Login
              </Link>
            )
          )}
        </div>
      }
    </div>
  );
}
