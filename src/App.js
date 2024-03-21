import React from 'react';
import './styles.css';

import VideoBg from './assets/gymBgVid.mp4';

const App = () => {
  return <section className='mainPage'>
    {/* overlay */}
    <div className='overlay'></div>
    {/* video */}
    <video src={VideoBg} autoPlay loop muted></video>
    {/* content */}
    <div className="page__content">
      <h1>Coming Soon</h1>
      <h2>
         We will let you know when we are ready
      </h2>
      <br/>
      
      <h3>"Pure Passion Pure Muay Thai"</h3>
    </div>

    <div className='location'>
      <p>2210 Queen St E, Toronto, Ontario</p>
    </div>
  </section>
};

export default App;