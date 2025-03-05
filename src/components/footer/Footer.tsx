import "./footer.scss";
import { useLanguage } from "./../../hooks/LangContext";
const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <p>&copy; {t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
