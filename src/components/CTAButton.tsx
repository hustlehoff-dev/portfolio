interface Props {
  children: string;
  onClick: () => void;
}

const CTAButton = ({ children, onClick }: Props) => {
  return (
    <a
      className="cta-button"
      href="mailto:adrian.kaczmarek123@gmail.com"
      onClick={onClick}
    >
      <span className="button-text">{children}</span>
      <div className="button-icon">
        <div className="button-icon-bg"></div>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="m7.012 18.069 9.702-9.702v7.298l1.499.028-.014-8.81-1.132-1.132-8.81-.014.028 1.499h7.298L5.88 16.937l1.131 1.132Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </a>
  );
};

export default CTAButton;
