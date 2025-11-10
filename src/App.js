//modules
import { useState } from 'react';
import {Route, Routes} from 'react-router';

//components
import Header from './components/Header/header';
import DisplayHello from "./components/module-47-react-basics/display-47/Display47";
import DisplayCounters from "./components/module-49-state-management/display-49/Display49";
import { PersonalFooter } from "./components/Footer/personal-footer";
import Navigation from "./components/Navigation/Nav";
import DisplayReducer from './components/module-63-useReducer/display-63/Display63';
import DisplayProtected from './components/module-61-protected-routes/display-61/Display61';

//stylesheet
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };
  
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        username={username}
      />
      <Routes>
        <Route path="/first-react-app/" element={<Navigation />} />
        <Route path="/first-react-app/47" element={<DisplayHello />} />
        <Route path="/first-react-app/49" element={<DisplayCounters />} />
        <Route
          path="/first-react-app/61"
          element={
            <DisplayProtected
              isLoggedIn={isLoggedIn}
              login={{
                onLogin: handleLogin,
                handleChange: (value) => setUsername(value),
                username: username,
              }}
            />
          }
        />
        <Route path="/first-react-app/63" element={<DisplayReducer />} />
        <Route
          path="*"
          element={
            <div className="error-page">
              <h1>404: Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </div>
          }
        />
      </Routes>
      <PersonalFooter />
    </>
  );
}

export default App;
