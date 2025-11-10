export default function Login({ login }) {
  const { onLogin, handleChange, username } = login

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && username.trim()) {
      onLogin();
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
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}
