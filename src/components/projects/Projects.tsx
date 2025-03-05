import "./projects.scss";
import { useLanguage } from "./../../hooks/LangContext";
import ProjectItems from "./Project";

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="projects-container">
      <div className="projects-wrapper">
        <div className="projects-title">
          <h2>{t("projects.heading")}</h2>
          <p>{t("projects.description")}</p>
          <p>{t("")}</p>
        </div>
        <ProjectItems />
      </div>
    </section>
  );
};

export default Projects;
