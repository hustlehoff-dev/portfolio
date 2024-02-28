import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Aboutme from "./components/About-me";
import Techstack from "./components/Techstack";
//import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <>
      <Header
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <main id="main">
        <Home selectedLanguage={selectedLanguage} />
        <Aboutme selectedLanguage={selectedLanguage} />
        <Techstack selectedLanguage={selectedLanguage} />
        <Contact selectedLanguage={selectedLanguage} />
      </main>
      <Footer children="© 2024 Kaczmarek Adrian ❤️️" />
    </>
  );
}
export default App;
