import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import ProjectDetail from "./pages/project-detail";
import Contact from "./pages/contact";
import Page404 from "./pages/404Page";
import { createContext, useState } from "react";
import Header from "./components/header";

export const ProjectContext = createContext(null);

function App() {
  const [projectDetail, setProjectDetail] = useState({});

  return (
    <ProjectContext.Provider value={{ projectDetail, setProjectDetail }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/test" element={<Header bg="white" />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Page404 />} />
            <Route path="/404" element={<Page404 />} />
          </Routes>
        </Router>
      </div>
    </ProjectContext.Provider>
  );
}

export default App;
