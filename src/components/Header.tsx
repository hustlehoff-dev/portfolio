interface Props {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}
function Header({ selectedLanguage, setSelectedLanguage }: Props) {
  const language: { [key: string]: { [key: string]: string } } = {
    en: {
      home: "Home",
      about: "About",
      tech: "Techstack",
      contact: "Contact",
      english: "English",
      polish: "Polish",
    },
    pl: {
      home: "Start",
      about: "O mnie",
      tech: "Technologie",
      contact: "Kontakt",
      english: "Angielski",
      polish: "Polski",
    },
  };
  return (
    <header>
      <div className="header-logo">
        <a href="#">
          <div className="logo-wrapper">
            <img src="../../src/assets/ka-logo.png"></img>
          </div>
          <div className="logo-slide-wrapper">
            <img src="../../src/assets/logo-1.png"></img>
          </div>
        </a>
      </div>

      <nav className="header-navigation">
        <a className="hover-lift" href="#home">
          <span className="hover-lift-deep">
            {language[selectedLanguage].home}
          </span>
          <span className="hover-lift-active">
            {language[selectedLanguage].home}
          </span>
        </a>
        <a className="hover-lift" href="#about-me">
          <span className="hover-lift-deep">
            {language[selectedLanguage].about}
          </span>
          <span className="hover-lift-active">
            {language[selectedLanguage].about}
          </span>
        </a>
        <a className="hover-lift" href="#tech">
          <span className="hover-lift-deep">
            {language[selectedLanguage].tech}
          </span>
          <span className="hover-lift-active">
            {language[selectedLanguage].tech}
          </span>
        </a>
        <a className="hover-lift" href="#contact">
          <span className="hover-lift-deep">
            {language[selectedLanguage].contact}
          </span>
          <span className="hover-lift-active">
            {language[selectedLanguage].contact}
          </span>
        </a>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="en">{language.en.english}</option>
          <option value="pl">{language.pl.polish}</option>
        </select>
      </nav>
    </header>
  );
}
export default Header;
