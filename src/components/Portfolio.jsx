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
            <a href="https://macromanager.surge.sh" target="_blank">Web Link</a>
          </div>
        </div>
        <div className="website web-events">
          <div className="hover-box">
            <h2>Events Express</h2>
            <a href="https://events-express.surge.sh" target="_blank">Web Link</a>
          </div>
        </div>
        <div className="website web-barrel">
          <div className="hover-box">
            <h2>Barrel-Aged</h2>
            <a href="https://barrel-aged.surge.sh" target="_blank">Web Link</a>
          </div>
        </div>
        <div className="website web-caracas">
          <div className="hover-box">
            <h2>Caracas</h2>
            <a href="https://caracas-restaurant.surge.sh" target="_blank">Web Link</a>
          </div>
        </div>
        <div className="website web-curtain">
          <div className="hover-box">
            <h2>Curtain Call</h2>
            <a href="https://curtain-call.surge.sh" target="_blank">Web Link</a>
          </div>
        </div>
      </div>
    </>
  )
}
