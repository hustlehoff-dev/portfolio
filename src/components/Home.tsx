const Home = () => {
  return (
    <section id="home ">
      <div className="home-wrapper background-p">
        <div className="home-contents">
          <div className="home-front">
            <h2>Adrian Kaczmarek</h2>
            <h1 className="home-heading">
              Making <span className="glitch">killer designs</span> since 2020
            </h1>
          </div>
          <div className="header-socials-wrapper">
            <a href="">
              <img
                src="../../src/assets/linkedin-icon.png"
                alt="Linkedin Social Icon"
              ></img>
            </a>
            <a href="">
              <img
                src="../../src/assets/github-icon.png"
                alt="GitHub Social Icon"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;