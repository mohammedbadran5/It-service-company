import "./project.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import projects from "../../assets/js/projects-data";
import EnoughTalk from "../../components/enough-talk";
import { ProjectContext } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const { setProjectDetail } = useContext(ProjectContext);
  const navigate = useNavigate();

  const getProjectDetail = (project) => {
    setProjectDetail(project);
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="project">
      <Header bg="white" />

      {/* PROJECTS SECTION END */}
      <section className="projects">
        <div className="projects__title">
          <p>Our Portfolio</p>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="projects__project"
            >
              <img src={`/assets/${project.img}`} alt="assets" />
              <h2>{project.title}</h2>
              <p>{project.info}</p>
            </article>
          ))}
        </div>
        <EnoughTalk />
      </section>
      {/* PROJECTS SECTION END */}

      <Footer />
    </div>
  );
};

export default Project;
