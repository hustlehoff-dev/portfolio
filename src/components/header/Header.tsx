import { useLanguage } from "./../../hooks/LangContext";
import "./header.scss";
import useIsMobile from "../../hooks/is-mobile";
import logo from "./../../assets/logo.png";

const Header = () => {
  const { t, changeLanguage, language } = useLanguage();
  const isMobile = useIsMobile();

  const links = [
    "navigation.start",
    "navigation.aboutme",
    "navigation.projects",
    "navigation.contact",
  ];

  return (
    <header className="nav-wrapper">
      <nav className="app-navigation" id="site-navigation">
        <div className="logo">
          <img src={logo} alt="Site Logo" />
        </div>

        <input type="checkbox" id="menu-toggle" />
        <label
          htmlFor="menu-toggle"
          className="burger-menu"
          style={{ display: !isMobile ? "none" : "flex" }}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </label>

        <ul
          id="primary-menu"
          className={`${isMobile ? "menu-mobile" : "menu-desktop"}`}>
          {links.map((link, index) => (
            <a key={index} className="" href={"#" + link}>
              <li>{t(link)}</li>
            </a>
          ))}
          <div className="language-buttons">
            <button
              onClick={() => changeLanguage("en")}
              className={`language-btn ${language === "en" ? "active" : ""}`}>
              English
            </button>
            <button
              onClick={() => changeLanguage("pl")}
              className={`language-btn ${language === "pl" ? "active" : ""}`}>
              Polski
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
