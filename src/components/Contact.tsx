interface Props {
  selectedLanguage: string;
}
const Contact = ({ selectedLanguage }: Props) => {
  const lang: { [key: string]: { [key: string]: string } } = {
    en: {
      contactPre: "Contact me",
      contactFull:
        "Let's talk about hiring, a project, collaboration or any idea you may have.",
      button: "Let's talk!",
    },
    pl: {
      contactPre: "Kontakt",
      contactFull:
        "Porozmawiajmy o zatrudnieniu, projekcie, współpracy lub jakiejkolwiek innej pomysłowej koncepcji. ",
      button: "Porozmawiajmy!",
    },
  };
  if (!(selectedLanguage in lang)) {
    return <div>Error: Selected language not supported</div>;
  }
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="contact-contents">
          <h3 className="pre-heading">{lang[selectedLanguage].contactPre} </h3>
          <h2 className="heading scroll-reveal shorter">
            {lang[selectedLanguage].contactFull}
          </h2>
        </div>
        <div className="button-wrapper">
          <a href="mailto:adrian.kaczmarek123@gmail.com" className="cta-button">
            <span className="button-text">{lang[selectedLanguage].button}</span>
            <div className="button-icon">
              <div className="button-icon-bg"></div>
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="m7.012 18.069 9.702-9.702v7.298l1.499.028-.014-8.81-1.132-1.132-8.81-.014.028 1.499h7.298L5.88 16.937l1.131 1.132Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
