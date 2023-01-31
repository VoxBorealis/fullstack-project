import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BarbarianSkillTree from "./components/BarbarianSkillTree";
import NavBar from "./components/Navbar";

const App = () => {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="necromancer" element={<BarbarianSkillTree />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
