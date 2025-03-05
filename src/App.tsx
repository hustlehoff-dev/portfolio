import "./App.scss";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Aboutme from "./components/aboutme/Aboutme";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Cv from "./components/cv/Cv";
const App = () => {
  return (
    <>
      <Loader />
      <Header />
      <Cv />
      <main>
        <Hero />
        <Aboutme />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
