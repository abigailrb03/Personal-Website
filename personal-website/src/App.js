import logo from './logo.svg';
import './App.css';
import gmail from "./Images/gmail_Icon.png"

import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js'

function App() {
  return (
    <div className = "canvas">
      <div className = "navBar">
        <a href="#about1" className='navButtons'>About</a>
        <a href="#experience1" className='navButtons'>Experience</a>
        <a href="#projects1" className='navButtons'>Projects</a>
        <a href="#contact1" className='navButtons'>Contact</a>
      </div>
      <div id='about1'> <About></About> </div>

      
    <div id='experience1'>
      <Experience></Experience>
    </div>
    <div id='projects1'>
      <Projects></Projects>
    </div>

      
      <div id='contact1'>
        <div className='contact'>

        </div>
      </div>
    </div>
  );
}

export default App;
