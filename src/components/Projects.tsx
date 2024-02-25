const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-wrapper">
        <div className="projects-contents">
          <div className="projects-heading">
            <h3 className="pre-heading">Projects</h3>
            <h2 className="heading scroll-reveal shorter-2">
              Glimpse on projects I delivered
            </h2>
          </div>
          <div className="project-wrapper">
            <div className="project-info-wrapper">
              <h2>Project 1</h2>
              <p>Info about the project</p>
            </div>
            <div className="project-image-wrapper"></div>
          </div>
          <div className="project-wrapper">
            <div className="project-info-wrapper">
              <h2>Project 2</h2>
              <p>Info about the project</p>
            </div>
            <div className="project-image-wrapper"></div>
          </div>

          <div className="project-wrapper">
            <div className="project-info-wrapper">
              <h2>Project 3</h2>
              <p>Info about the project</p>
            </div>
            <div className="project-image-wrapper"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
