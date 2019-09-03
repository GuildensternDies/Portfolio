import React from 'react';
import './App.css';
import SkillPics from './components/SkillPics';
import Portfolio from './components/Portfolio';
import profile from './assets/profile.jpeg';

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1>Brian Evan Weitz</h1>
        <h3>Software Engineer</h3>
        <div id="nav">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div id="about">
        <h3>About me</h3>
        <img id="profile-pic" src={profile} />
        <p>Web developer with a background in theater and immersive storytelling. I create compelling, responsive, full stack web applications.</p>
        <SkillPics />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <h3>Contact</h3>
        <div id="contact-links">
          <a href="mailto:brianevanweitz@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/brianweitz1088/">LinkedIn</a>
          <a href="https://github.com/brianevanweitz">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default App;
