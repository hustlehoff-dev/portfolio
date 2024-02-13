function Header() {
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
          <span className="hover-lift-deep">Home</span>
          <span className="hover-lift-active">Home</span>
        </a>
        <a className="hover-lift" href="#about-me">
          <span className="hover-lift-deep">About</span>
          <span className="hover-lift-active">About</span>
        </a>
        <a className="hover-lift" href="#projects">
          <span className="hover-lift-deep">Work</span>
          <span className="hover-lift-active">Work</span>
        </a>
        <a className="hover-lift" href="#contact">
          <span className="hover-lift-deep">Contact</span>
          <span className="hover-lift-active">Contact</span>
        </a>
        <select>
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
      </nav>
    </header>
  );
}
export default Header;
