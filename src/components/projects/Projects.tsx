import React from "react";
import "./projects.scss";
import { useLanguage } from "./../../hooks/LangContext";
//import ProjectItems from "./Project";

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="projects-container">
      <div className="projects-wrapper">
        <div className="projects-title">
          <h2>{t("projectsHeading")}</h2>
          <p>{t("projectsDesc")}</p>
        </div>
        {/*<ProjectItems /> */}
      </div>
    </section>
  );
};

export default Projects;
