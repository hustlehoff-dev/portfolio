import "./contact.scss";
import EmailIcon from "@mui/icons-material/Email";

import { useLanguage } from "./../../hooks/LangContext";
const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="navigation.contact" className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-content">
          <h2>{t("contact.heading")}</h2>
          <p>{t("contact.description")}</p>
        </div>
        <a href="mailto:contact@example.com" className="email-link">
          <EmailIcon /> kaczmarek.adrian.lead@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
