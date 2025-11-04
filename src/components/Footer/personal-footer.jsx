import { Link, useLocation } from "react-router";
import "./personal-footer.css";

export function PersonalFooter() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <footer className="bookend">
      <div>Posted by Ashton Oder 2025</div>
      <br />
      <nav>
        <a href="#top">Back to Top</a>
        {!["/first-react-app/", "/first-react-app"].includes(
          location.pathname
        ) && <Link to="/first-react-app/">React Navigation</Link>}
        <a href="https://veryexcitedgremlin.github.io/">
          Return to projects homepage
        </a>
      </nav>
    </footer>
  );
}
