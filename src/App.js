import { useRef } from "react";
import About from "./Component/About";
import Home from "./Component/Home";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import Parent from "./Parent";
import Contact from "./Component/Contact";

function App() {
  const sectionRef = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    project: useRef(null),
    contact: useRef(null)
  }
  return (
    <div className="App font-['Poppins'] bg-[--background] h-full overflow-hidden">
      <Parent dataRef={sectionRef}>
        <Home IntoPage={sectionRef?.home} AboutPage={sectionRef}/>
        <About IntoPage={sectionRef?.about}/>
        <Skills  IntoPage={sectionRef?.skills}/>
        <Project IntoPage={sectionRef?.project}/>
        <Contact IntoPage={sectionRef?.contact}/>
      </Parent>
    </div>
  );
}

export default App;
