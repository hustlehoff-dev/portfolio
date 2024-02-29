interface Props {
  selectedLanguage: string;
}

const Aboutme = ({ selectedLanguage }: Props) => {
  return (
    <section id="about-me">
      <div className="about-me-wrapper">
        <div className="about-me-contents">
          {selectedLanguage === "en" ? (
            <>
              <div className="about-me-info">
                <h3 className="pre-heading">About me</h3>
                <h2 className="heading scroll-reveal">
                  I'm a <strong className="strong">highly passionate</strong>{" "}
                  front-end dev with strong focus on delivering high quality
                  killer digital experience.
                </h2>
              </div>
            </>
          ) : (
            <>
              <div className="about-me-info">
                <h3 className="pre-heading">O mnie</h3>
                <h2 className="heading scroll-reveal">
                  Tworzę <span>niesamowite wrażenia</span> dla użytkowników.
                  Jestem samoukiem, pasjonatem front-endu.
                </h2>
              </div>
            </>
          )}

          <div className="about-me-image">
            <img src="../../src/assets/about-me.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
