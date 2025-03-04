import {} from "react";
import { useLanguage } from "./../../hooks/LangContext";
import "./header.scss";
import useIsMobile from "../../hooks/is-mobile";
import logo from "./../../assets/logo.png";

const Header = () => {
  const { t, changeLanguage, language } = useLanguage();
  const isMobile = useIsMobile();

  const links = ["start", "aboutme", "projects", "contact"];
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
            <li key={index}>
              <a
                className="hover-underline-anim left nav-link"
                href={"#" + link}>
                {t(link)}
              </a>
            </li>
          ))}
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-dropdown">
            <option value="en">English</option>
            <option value="pl">Polski</option>
          </select>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
