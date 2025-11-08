import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/first-react-app/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin();
      navigate(from, { replace: true });
    }
  };

  return (
    <>
      <h3>Login</h3>
      {location.state?.from && <p>You must login to view that page</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Enter any username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}
