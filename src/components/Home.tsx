interface Props {
  selectedLanguage: string;
}
const Home = ({ selectedLanguage }: Props) => {
  return (
    <section id="home">
      <div className="home-wrapper background-p">
        <div className="home-contents">
          <div className="home-front ">
            <h2 className="show-up-2">Adrian Kaczmarek</h2>
            <h1 className="home-heading show-up">
              {selectedLanguage === "en" ? (
                <>
                  Making <span>killer designs</span> since 2020
                </>
              ) : (
                <>
                  Koduje <span>genialny design</span>
                  <br /> od roku
                  <br /> 2020
                </>
              )}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
