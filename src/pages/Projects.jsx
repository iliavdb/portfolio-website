import data from "../data.js";
import { useState } from "react";
import Project from "../components/Project";
import Modal from "../components/Modal.jsx";

const Projects = () => {
  const [projects] = useState(data);
  const [activeProject, setActiveProject] = useState(null); 

  return (
    <section className="projects-container">
      <h1 className="projects-title">Projecten</h1>

      {/* Scrollable wrapper */}
      <div className="projects-grid-wrapper">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              button={project.button}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Dynamische modal */}
      {activeProject && (
        <Modal isOpen={true} onClose={() => setActiveProject(null)}>
          <h2>{activeProject.title}</h2>
          <img
            src={activeProject.image}
            alt={activeProject.title}
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <p>{activeProject.description}</p>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
