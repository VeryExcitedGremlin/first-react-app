import ProtectedRoute from "../ProtectedRoute";
import Dashboard from "../Dashboard";
import Login from "../Login";

export default function DisplayProtected({ isLoggedIn, handleLogin, handleUsername }) {
  return (
    <>
      <h2>Module 61 - Protected Routes</h2>
      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Dashboard />
        <Login onLogin={handleLogin} />
      </ProtectedRoute>
    </>
  );
}
