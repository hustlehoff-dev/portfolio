import "./loader.scss";
const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <img src="/ka-logo.png" alt="Site Logo" className="custom-logo" />
        <h2 className="loader-title">Adrian Kaczmarek</h2>
        <span className="loader-sub">Front-end Developer</span>
      </div>
    </div>
  );
};

export default Loader;
