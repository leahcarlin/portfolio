import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Tech from "./Pages/Tech/Tech";
import Projects from "./Pages/Projects/Projects";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Tech />
      <Projects />
    </div>
  );
}

export default App;
