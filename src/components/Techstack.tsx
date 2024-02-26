import { useEffect, useState } from "react";

interface Props {
  selectedLanguage: string;
}

const Techstack = ({ selectedLanguage }: Props) => {
  // Class based on window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Translations
  const lang: { [key: string]: { [key: string]: string } } = {
    en: {
      tech: "Techstack",
      techHeading: '"Trust the process."',
      html5: "HTML5",
      html5Desc: "Astonishing responsive design",
      javascript: "Javascript",
      javascriptDesc: "Turning coffee into code faster than Bolt",
      scss: "SCSS",
      scssDesc: "Websites looking so good you just swipe right",
      seo: "SEO",
      seoDesc: "I will make you disappear, from the bottom of Google",
      copyWriting: "Copywriting",
      copyWritingDesc:
        "Writing copy, that increases users engagement (at least I think so)",
      sem: "SEM",
      semDesc:
        "Like my SEO's hotter sister, makes your ads pop and your clicks count",
      react: "React",
      reactDesc: "UI's so responsive, they reply unasked",
      wordpress: "Wordpress",
      wordpressDesc: "I used to take shortcuts and they were still beautiful",
      git: "Git",
      gitDesc: "Saves my code from any disasters",
    },
    pl: {
      tech: "Technologie",
      techHeading: '"Ufaj procesowi."',
      html5: "HTML5",
      html5Desc: "Zachwycający responsywny design",
      javascript: "Javascript",
      javascriptDesc: "Przekształcam kawę w kod szybciej niż biega Bolt",
      scss: "SCSS",
      scssDesc: "Strony wyglądają tak dobrze, że po prostu przesuwasz w prawo",
      seo: "SEO",
      seoDesc: "Sprawię, że znikniesz z dna Google",
      copyWriting: "Copywriting",
      copyWritingDesc:
        "Piszę treści, które zwiększają zaangażowanie użytkowników (bez dyskusji)",
      sem: "SEM",
      semDesc:
        "Jak gorąca siostra mojego SEO, sprawia, że Twoje reklamy przyciągają uwagę, a kliknięcia się liczą",
      react: "React",
      reactDesc:
        "Interfejsy użytkownika tak responsywne, że odpowiadają niepytane",
      wordpress: "Wordpress",
      wordpressDesc: "Kiedyś chodziłem na skróty, ale droga nadal była piękna",
      git: "Git",
      gitDesc: "Ratuje mój kod przed wszelkimi katastrofami",
    },
  };
  if (!(selectedLanguage in lang)) {
    return <div>Error: Selected language not supported</div>;
  }

  return (
    <section id="tech">
      <div className="tech-wrapper">
        <div className="tech-contents">
          <div className="tech-info">
            <h3 className="pre-heading">{lang[selectedLanguage].tech} </h3>
            <ul className={windowWidth > 800 ? "tech-grid-l" : "tech-grid"}>
              <li>
                <p className="p-1">{lang[selectedLanguage].html5}</p>
                <p className="p-2">{lang[selectedLanguage].html5Desc}</p>
              </li>
              <li>
                <p className="p-1">{lang[selectedLanguage].javascript}</p>
                <p className="p-2">{lang[selectedLanguage].javascriptDesc}</p>
              </li>
              <li>
                <p className="p-1">{lang[selectedLanguage].scss}</p>
                <p className="p-2">{lang[selectedLanguage].scssDesc}</p>
              </li>
              <li>
                <p className="p-1">{lang[selectedLanguage].seo}</p>
                <p className="p-2">{lang[selectedLanguage].seoDesc}</p>
              </li>
              <li className="copy">
                <p className="p-1">{lang[selectedLanguage].copyWriting}</p>
                <p className="p-2">{lang[selectedLanguage].copyWritingDesc}</p>
              </li>
              <li>
                <p className="p-1">{lang[selectedLanguage].sem}</p>
                <p className="p-2">{lang[selectedLanguage].semDesc}</p>
              </li>
              <li>
                <p className="p-1">{lang[selectedLanguage].react}</p>
                <p className="p-2">{lang[selectedLanguage].reactDesc}</p>
              </li>
              <li>
                <p className="p-1">{lang[selectedLanguage].wordpress}</p>
                <p className="p-2">{lang[selectedLanguage].wordpressDesc}</p>
              </li>
              <li>
                <p className="p-1">{lang[selectedLanguage].git}</p>
                <p className="p-2">{lang[selectedLanguage].gitDesc}</p>
              </li>
            </ul>

            <h2 className="heading scroll-reveal shorter">
              {lang[selectedLanguage].techHeading}
            </h2>
          </div>
          <div className="tech-image">
            <img src="../../src/assets/about-me.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techstack;
