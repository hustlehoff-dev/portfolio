const Techstack = () => {
  return (
    <section id="tech">
      <div className="tech-wrapper">
        <div className="tech-contents">
          <div className="tech-info">
            <h3 className="pre-heading">Techstack</h3>
            <h2 className="heading scroll-reveal">
              Learning never exhausts the mind.
            </h2>
            <ul className="tech-grid">
              <li>
                <p className="p-1">HTML5</p>
                <p className="p-2">
                  Many years of astonishing responsive design
                </p>
              </li>
              <li>
                <p className="p-1">Javascript</p>
                <p className="p-2">Turning coffee into code faster than Bolt</p>
              </li>
              <li>
                <p className="p-1">SCSS</p>
                <p className="p-2">
                  Websites looking so good you just swipe right
                </p>
              </li>
              <li>
                <p className="p-1">SEO</p>
                <p className="p-2">
                  I will make you disappear, from the bottom of Google
                </p>
              </li>
              <li className="copy">
                <p className="p-1">Copy writing</p>
                <p className="p-2">
                  Writing copy, that increases users engagement (at least I
                  think so)
                </p>
              </li>
              <li>
                <p className="p-1">SEM</p>
                <p className="p-2">
                  Like my SEO's hotter sister, makes your ads pop and your
                  clicks count
                </p>
              </li>
              <li>
                <p className="p-1">React</p>
                <p className="p-2">UI's so responsive, they reply unasked</p>
              </li>
              <li>
                <p className="p-1">Wordpress</p>
                <p className="p-2">
                  I used to take shortcuts and they were still beautiful
                </p>
              </li>
              <li>
                <p className="p-1">Git</p>
                <p className="p-2">Saves my code from any disasters</p>
              </li>
            </ul>
          </div>
          <div className="tech-image">
            <img src="../../src/assets/about-me.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techstack;
