import React from 'react';
import { InstagramCard } from '../Components/InstagramCard';
import '../styles.css'

const Home = () => {
  return (
    <div>
      <div className="carousel">
        <h1>Carousel</h1>
      </div>


      {/* Instagram update */}
      <h1>UPDATE</h1>
      <InstagramCard />
    </div>
  )
}

export default Home;