import React from "react";
import { useLanguage } from "./../../hooks/LangContext";
import { motion } from "framer-motion";

interface Project {
  title: string;
  demoLink: string;
  githubLink: string | undefined;
  screenshot: string;
  description: JSX.Element;
  technologies: string[];
}

const ProjectItems = () => {
  const { t } = useLanguage();

  const projectList: Project[] = [
    {
      title: "Tom-Rys",
      demoLink: "https://tom-rys.pl/",
      githubLink: undefined,
      screenshot: tomRysScreenshot,
      description: <>{t("Projects.tomRys.description")}</>,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Tropicar",
      demoLink: "https://tropicar.netlify.app/",
      githubLink: "https://github.com/ppuhacz/tropicar",
      screenshot: tropicarScreenshot,
      description: <>{t("Projects.tropicar.description")}</>,
      technologies: ["React.js", "TypeScript", "Airtable", "Sass"],
    },
    {
      title: "Onely blog clone",
      demoLink: "https://calm-parfait-2f27b9.netlify.app/",
      githubLink: "https://github.com/ppuhacz/onely-blog-clone-typescript",
      screenshot: onelyScreenshot,
      description: <>{t("Projects.onely.description")}</>,
      technologies: ["React.js", "Angular", "TypeScript", "GraphQL", "Sass"],
    },
    {
      title: "Country data",
      demoLink: "https://voluble-dasik-379a8b.netlify.app/",
      githubLink: "https://github.com/ppuhacz/country-data",
      screenshot: countryDataScreenshot,
      description: <>{t("Projects.countryData.description")}</>,
      technologies: ["React.js", "CSS3", "Axios"],
    },
  ];

  const projectsMapped = projectList.map((project) => {
    const {
      title,
      demoLink,
      githubLink,
      screenshot,
      description,
      technologies,
    } = project;

    return (
      <div className="project-wrapper" key={`project-${title}`}>
        <div className="project-black-line"></div>
        <div className="project-info">
          <motion.div
            className="project-vertical-line"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div
            className="project-info-description"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}>
            <div className="project-info-photo">
              <a href={demoLink} target="_blank" rel="noreferrer noopener">
                <img
                  src={screenshot}
                  alt="Screenshot of project's landing page"
                  className="project-screenshot"
                  loading="lazy"
                  width="450px"
                  height="100%"
                />
              </a>
            </div>
            <div className="project-info-text">
              <a href={demoLink} target="_blank" rel="noreferrer noopener">
                <h3>{title.toLocaleUpperCase()}</h3>
              </a>
              <p>{description}</p>
              <h4>{t("Projects.technologies")}</h4>
              <ul className="project-technologies-list">
                {technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <span>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="project-link">
                  <img
                    src={newWindow}
                    alt="open project in new window"
                    height={20}
                  />
                  {t("Projects.demo")}
                </a>
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-link">
                    <img src={githubIcon} height={20} alt="Github icon" />
                    {t("Projects.code")}
                  </a>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  });
  return <div className="project-list-container">{projectsMapped}</div>;
};

export default ProjectItems;
