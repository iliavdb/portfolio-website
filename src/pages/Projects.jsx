const Projects = () => {
  return (
    <section className="projects-container">
      <h1>Projecten</h1>

      <div className="projects-grid">
        <div className="project-card">
          <img src="/images/3.png" alt="Escape Room Project" />
          <h3>Escape Room</h3>
          <button>Bekijk Details</button>
        </div>

        <div className="project-card">
          <img src="/images/1.png" alt="Portfolio" />
          <h3>Portfolio Website</h3>
          <button>Bekijk Details</button>
        </div>

        <div className="project-card">
          <img src="/images/3.png" alt="Car Detail" />
          <h3>Car Detail Masters</h3>
          <button>Bekijk Details</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
