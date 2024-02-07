import React from "react";

const Main = () => {
  return (
    <main>
      <section id="home">
        <div className="home-wrapper">
          <div className="home-contents">
            <div className="home-personal-info">
              <h1>Adrian Kaczmarek</h1>
              <span>
                Self-taught, passionate Web Developer based in Koszalin, Poland{" "}
                <img src="https://camo.githubusercontent.com/d31b1bb3a11bc0c9d0525de49f427e7f07d73da491f0f92f4b4656e28f5bef8a/68747470733a2f2f69636f6e732e69636f6e617263686976652e636f6d2f69636f6e732f69636f6e617263686976652f646f6765636f696e2d746f2d7468652d6d6f6f6e2f3531322f446f67652d69636f6e2e706e67"></img>
              </span>
              <div className="header-socials-wrapper">
                <span>
                  <a href="https://github.com/hustlehoff-dev">
                    <img src="../../src/assets/github-icon.png"></img>
                  </a>
                </span>
                <span>
                  <a href="">
                    <img src="../../src/assets/linkedin-icon.png"></img>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-me">
        <div className="about-me-wrapper">
          <div className="about-me-contents">
            <div className="about-me-image">
              <img src="../../src/assets/about-me.jpg"></img>
            </div>
            <div className="about-me-info">
              <h3>About me</h3>
              <h2>Passionate Web Developer</h2>
              <p>
                Hi, I'm Adrian, a passionate self-taught web developer
                specializing in front-end development with a focus on React.js.
                What began as a hobby has blossomed into a journey of constant
                learning and growth, fueled by my desire to create outstanding
                user experiences.
              </p>
              <p>
                My journey in web development has been driven by a relentless
                pursuit of knowledge and a commitment to pushing boundaries. I
                thrive on challenges that push me beyond my comfort zone, as
                they provide invaluable opportunities for learning and
                improvement.
              </p>
              <p>
                With a solid foundation in HTML5, CSS3, and Sass, I've embraced
                the power of modern technologies like Javascript, React.js and
                Wordpress themes development to craft dynamic and engaging web
                experiences. I take pride in not only creating visually stunning
                websites but also in ensuring seamless performance and
                responsiveness across various devices.
              </p>
              <p>
                I firmly believe in the importance of user-centric design,
                striving to develop interfaces that are not only aesthetically
                pleasing but also intuitive and user-friendly. My goal is to
                create digital experiences that delight and inspire users while
                meeting the functional needs of the project.
              </p>
              <p>
                Driven by a passion for innovation and staying up to date with
                industry trends, I am eager to take on new challenges and
                contribute to projects that make a difference. Let's collaborate
                to deliver exceptional digital solutions together.
              </p>
            </div>
          </div>
        </div>
      </section>
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
