import Home from "./Home";
import Aboutme from "./About-me";
import Techstack from "./Techstack";

const Main = () => {
  return (
    <main id="main">
      <Home />
      <Aboutme />
      <Techstack />
      <section id="projects">
        <div className="projects-wrapper">
          <div className="projects-contents">
            <div className="projects-heading">
              <h3>Projects</h3>
              <h2>Glimpse on projects I delivered</h2>
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
      <section id="contact">
        <div className="contact-wrapper">
          <div className="contact-contents">
            <h3>Contact me</h3>
            <h2>
              Let's talk about a project, collaboration on any idea you may have
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
