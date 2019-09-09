import React from 'react'
import barrel from '../assets/barrel.png';
import caracas from '../assets/caracas.png';
import events from '../assets/events.png';
import macro from '../assets/macro.png';

export default function Portfolio() {
  return (
    <>
      <h3>Projects</h3>
      <div id="portfolio-section">
        <div className="website web-macro">
          <div className="hover-box">
            <h2>Macro Manager</h2>
            <p>Diet-tracking application for macro-nutrients leveraging vanilla Javascript and the Edamam API.</p>
            <a href="https://macromanager.surge.sh" target="_blank">Web Link</a>
            <a href="https://github.com/brianevanweitz/macro-manager" target="_blank">Github</a>
          </div>
        </div>
        <div className="website web-events">
          <div className="hover-box">
            <h2>Events Express</h2>
            <p>Application to search local events and store them in an interactive calendar. Uses Ticketmaster API and React.JS.</p>
            <a href="https://events-express.surge.sh" target="_blank">Web Link</a>
            <a href="https://github.com/brianevanweitz/EventsExpress" target="_blank">Github</a>
          </div>
        </div>
        <div className="website web-barrel">
          <div className="hover-box">
            <h2>Barrel-Aged</h2>
            <p>Full stack social whiskey review site using Express and React.</p>
            <a href="https://barrel-aged.surge.sh" target="_blank">Web Link</a>
            <a href="https://github.com/brianevanweitz/barrel-aged" target="_blank">Github</a>
          </div>
        </div>
        <div className="website web-caracas">
          <div className="hover-box">
            <h2>Caracas</h2>
            <p>Redesign of local Brooklyn restaurant using React. Collaboration project with team of UX Designers.</p>
            <a href="https://caracas-restaurant.surge.sh" target="_blank">Web Link</a>
            <a href="https://github.com/brianevanweitz/Caracas" target="_blank">Github</a>
          </div>
        </div>
        <div className="website web-curtain">
          <div className="hover-box">
            <h2>Curtain Call</h2>
            <p>Full-stack Tinder style social application connecting theatre-goers with companions to see local theatre productions using Ruby on Rails and React.JS.</p>
            <a href="https://curtain-call.surge.sh" target="_blank">Web Link</a>
            <a href="https://github.com/brianevanweitz/CurtainCall" target="_blank">Github</a>
          </div>
        </div>
      </div>
    </>
  )
}
