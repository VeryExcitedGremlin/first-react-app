import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({ isLoggedIn, children }) {
  // const location = useLocation();

  if (!isLoggedIn) {
    return (
      // <Navigate
      //   to="/first-react-app/Login"
      //   state={{ from: location }}
      //   replace
      // />
      children[1]
    );
  }
  return children[0];
}
