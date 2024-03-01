import HeaderBar from "./Modules/Header/HeaderBar";
import "./assets/App.scss";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Modules/Home/Home";
import Contact from "./Modules/Contact/Contact";
import AboutPage from "./Modules/About/About";
import ProjectsPage from "./Modules/Projects/Projects";
import Footer from "./Modules/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <HeaderBar />
        </div>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
};
export default App;
