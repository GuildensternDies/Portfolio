import React from 'react'
import css from '../assets/skills/css.png';
import git from '../assets/skills/git.png';
import github from '../assets/skills/github.png';
import html from '../assets/skills/html.png';
import javascript from '../assets/skills/javascript.png';
import postgresql from '../assets/skills/postgresql.png';
import rails from '../assets/skills/rails.png';
import react from '../assets/skills/react.png';
import ruby from '../assets/skills/ruby.png';

export default function SkillPics() {
  return (
    <div id="skill-section">
      <h3>Skills</h3>
      <div id="skill-pics">
        <div className="icon">
          <img src={html} />
          <p>HTML 5</p>
        </div>
        <div className="icon">
          <img src={css} />
          <p>CSS 3</p>
        </div>
        <div className="icon">
          <img src={javascript} />
          <p>Javascript (ES6)</p>
        </div>
        <div className="icon">
          <img src={react} />
          <p>React.js</p>
        </div>
        <div className="icon">
          <img src={git} />
          <p>Git</p>
        </div>
        <div className="icon">
          <img src={postgresql} />
          <p>PostgreSQL</p>
        </div>
        <div className="icon">
          <img src={ruby} />
          <p>Ruby</p>
        </div>
        <div className="icon">
          <img src={rails} />
          <p>Rails</p>
        </div>
        <div className="icon">
          <img src={github} />
          <p>github</p>
        </div>
      </div>
    </div >
  )
}
