import React from "react";
import "./hero.scss";
import hero from "./../../assets/hero.webp";
import TechStack from "../techstack/Techstack";
import HeroBackground from "./HeroBackground";
import HeroLogo from "./HeroLogo";
import { Canvas } from "@react-three/fiber";
import { useLanguage } from "./../../hooks/LangContext";
const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="start" className="hero">
      <div className="hero-container">
        <header className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-heading">{t("heroHeading")}</h1>
            <p className="hero-desc">{t("heroDesc")}</p>
            <TechStack />
          </div>
          <div className="hero-sphere">
            <HeroLogo />
            {/*<Canvas style={{ height: "100%" }} gl={{ alpha: true }}>
              <HeroBackground />
            </Canvas>*/}
          </div>
          <figure className="hero-bg">
            <img src={hero} alt="Hero section background image" />
          </figure>
        </header>
      </div>
    </section>
  );
};

export default Hero;
