import Home from "./Home";
import Aboutme from "./About-me";
import Techstack from "./Techstack";
import Projects from "./Projects";

const Main = () => {
  return (
    <main id="main">
      <Home />
      <Aboutme />
      <Techstack />
      <Projects />
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
