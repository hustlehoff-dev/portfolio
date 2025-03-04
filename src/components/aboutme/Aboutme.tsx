import React from "react";
import "./aboutme.scss";
import { useLanguage } from "./../../hooks/LangContext";
const Aboutme = () => {
  const { t } = useLanguage();
  return (
    <section id="aboutme" className="about">
      <div className="container">
        <h2>{t("aboutmeHeading")}</h2>
        <p>{t("aboutmeDesc")}</p>
      </div>
    </section>
  );
};

export default Aboutme;
