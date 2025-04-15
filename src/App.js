import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projectsandexperience from "./components/Projectsandexperience/Projectsandexperience";

import Aboutpg1 from "./components/About-Me/About-Me";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Aboutpg1/>
      <Skills/>
      <Projectsandexperience/>
      <Contact/>

    </div>
  );
}
