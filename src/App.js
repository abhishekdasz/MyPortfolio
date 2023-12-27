import Hero from "./Components/Hero/Hero";
import './App.css'
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Skillss from "./Components/Skills/Skillss";
import About from "./Components/About/About";
import Qualification from "./Components/Qualification/Qualification";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      {/* <Skills/> */}
      <About/>
      <Skillss/>
      <Projects/>]
    </div>
  );
}

export default App;
