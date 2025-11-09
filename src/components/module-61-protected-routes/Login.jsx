// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

export default function Login({ onLogin, handleChange, username }) {
  // const [username, setUsername] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/first-react-app/61";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && username.trim()) {
      onLogin();
      // navigate(from, { replace: true });
    }
  };
  // let name;

  // useEffect(() => {
  //   name = username;
  // }, [username]);

  return (
    <>
      <h3>Login</h3>
      {location.state?.from && <p>You must login to view that page</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Enter any username"
          value={username}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}
