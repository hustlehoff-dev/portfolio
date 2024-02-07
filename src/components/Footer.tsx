interface Props {
  children: string;
}

const Footer = ({ children }: Props) => {
  return <footer>{children}</footer>;
};
export default Footer;
