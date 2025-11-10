export default function ProtectedRoute({ isLoggedIn, children }) {

  if (!isLoggedIn) {
    return (
      children[1]
    );
  }
  return children[0];
}
