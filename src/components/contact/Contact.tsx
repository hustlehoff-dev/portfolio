import React from "react";
import "./contact.scss";
import { useLanguage } from "./../../hooks/LangContext";
const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="contact-container">
      <div className="contact-wrapper">
        <h2>{t("contactHeading")}</h2>
        <p>{t("contactDesc")}</p>
        <a href="mailto:contact@example.com" className="email-link">
          contact@example.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
