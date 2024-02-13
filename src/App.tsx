//import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer children="© 2024 Kaczmarek Adrian ❤️️" />
    </>
  );
}
export default App;
