import { useEffect } from "react";
import AOS from "aos";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Tech from "./Pages/Tech/Tech";
import Projects from "./Pages/Projects/Projects";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Pages/Contact/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <footer>
        <p>developed by Leah Carlin</p>
        <p>
          design inspo from
          <a href="https://github.com/pavanmg007/react-developer-portfolio-template">
            pavanmg007
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
