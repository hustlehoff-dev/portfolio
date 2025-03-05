import "./aboutme.scss";
import { useLanguage } from "./../../hooks/LangContext";
const Aboutme = () => {
  const { t } = useLanguage();
  return (
    <section id="aboutme" className="about">
      <div className="aboutme-container">
        <div className="aboutme-wrapper">
          <div className="aboutme-image">
            <img src="./webdesign.png" alt="" />
          </div>
          <div className="aboutme-text">
            <h2>{t("aboutme.heading")}</h2>
            <span>{t("aboutme.description.part1")}</span>
            <p>{t("aboutme.description.part2")}</p>
            <p>{t("aboutme.description.part3")}</p>
            <p>{t("aboutme.description.part4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
