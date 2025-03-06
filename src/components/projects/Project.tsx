import { useLanguage } from "./../../hooks/LangContext";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
interface Project {
  title: string;
  demoLink: string;
  githubLink: string | undefined;
  screenshot: string;
  description: any;
  technologies: string[];
}
const comeincryptoSS = "./comeincryptomobile.png";
const barberSS = "./barber.png";
const placeholder = "./code_brackets.webp";
const ProjectItems = () => {
  const { t } = useLanguage();

  const projectList: Project[] = [
    {
      title: "ComeInCrypto Mobile WebApp",
      demoLink: "https://melodic-gelato-66855f.netlify.app/",
      githubLink: "https://github.com/hustlehoff-dev/blog-react-headlesswp",
      screenshot: comeincryptoSS,
      description: <>{t("projects.crypto.description")}</>,
      technologies: ["React.js", "TypeScript", "API", "Sass"],
    },
    {
      title: "EssaBarber Appointment MApp",
      demoLink: "",
      githubLink: "",
      screenshot: barberSS,
      description: <>{t("projects.barber.description")}</>,
      technologies: ["React Native", "TypeScript", "Firebase", "Sass"],
    },
    {
      title: "Coming in a few days! Really.",
      demoLink: "",
      githubLink: "",
      screenshot: placeholder,
      description: <>{t("projects.placeholder.description")}</>,
      technologies: ["NextJS", "TypeScript", "GraphQL", "HeadlessCMS", "Sass"],
    },
    {
      title: "Coming in a few days! Really.",
      demoLink: "",
      githubLink: "",
      screenshot: placeholder,
      description: <>{t("projects.placeholder.description")}</>,
      technologies: ["Placeholder"],
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
        <div className="project-info">
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

              <span>
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-link">
                    <OpenInNewIcon />
                    {t("projects.demo")}
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-link">
                    <GitHubIcon />
                    {t("projects.code")}
                  </a>
                )}
              </span>
              {/*<h4>{t("projects.technologies")}</h4>*/}
              <ul className="project-technologies-list">
                {technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    );
  });
  return <div className="project-list-container">{projectsMapped}</div>;
};

export default ProjectItems;
