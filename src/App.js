import "./App.css";
import {Route, Routes} from 'react-router';
import DisplayHello from "./components/module-47-react-basics/display-47/Display47";
import DisplayCounters from "./components/module-49-state-management/display-49/Display49";
import { PersonalFooter } from "./components/Footer/personal-footer";
import Navigation from "./components/Navigation/Nav";

function App() {
  return (
    <>
      <h1>This is all the same HTML page</h1>
      <p>React only redraws what changes!</p>
      <Routes>
        <Route path="/first-react-app/" element={<Navigation />} />
        <Route path="/first-react-app/47" element={<DisplayHello />} />
        <Route path="/first-react-app/49" element={<DisplayCounters />} />
      </Routes>
      <PersonalFooter />
    </>
  );
}

export default App;
