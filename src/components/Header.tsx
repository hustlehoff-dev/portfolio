function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-logo">
          <a href="#">
            <div className="logo-slide-wrapper">
              <img height="42px" src="../../src/assets/logo-1.png"></img>
            </div>
            <div className="logo-wrapper">
              <img height="42px" src="../../src/assets/logo-2.png"></img>
            </div>
          </a>
        </div>
        <div className="header-navigation-wrapper">
          <nav>
            <a className="hover-underline" href="#home">
              Home
            </a>
            <a className="hover-underline" href="#about-me">
              About me
            </a>
            <a className="hover-underline" href="#projects">
              Projects
            </a>
            <a className="hover-underline" href="#contact">
              Contact
            </a>
          </nav>
          <select>
            <option value="en">English</option>
            <option value="pl">Polish</option>
          </select>
        </div>
      </div>
    </header>
  );
}
export default Header;
