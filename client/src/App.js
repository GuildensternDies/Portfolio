import React from 'react';
import './App.css';
import SkillPics from './components/SkillPics';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1>Brian Evan Weitz</h1>
        <h3>Software Engineer</h3>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <div id="about">
        <h3>About me</h3>
        <p>Web developer with a background in theater and immersive storytelling. I create compelling, responsive, full stack web applications.</p>
        <SkillPics />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default App;
