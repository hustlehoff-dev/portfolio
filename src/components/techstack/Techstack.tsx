import "./techstack.scss";
import TechIcon from "tech-stack-icons";
import { useLanguage } from "./../../hooks/LangContext";

const TechStack = () => {
  const { t } = useLanguage();
  const techStack = [
    "reactjs",
    "nextjs",
    "html5",
    "css3",
    "sass",
    "tailwindcss",
    "typescript",
    "graphql",
    "firebase",
    "git",
  ];

  return (
    <>
      <div className="techstack-container">
        {/*<span className="techstack-sep">{t("techstack-sep")}</span>*/}
        <div className="techstack-wrapper">
          <ul className="techstack-icons">
            {techStack.map((tech, index) => (
              <li key={index} className={`tech-icon ${tech}`}>
                <TechIcon name={tech} style={{ width: "60%" }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TechStack;
