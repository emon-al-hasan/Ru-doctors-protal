import React from 'react';
import chair from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen px-12 mt-12 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here </h1>
            <p class="py-6">We guarantee the highest professional standards and use the proven, pioneering and game-changing ReLEx smile technique performed with ZEISS VisuMax as well as the most advanced  surgery.</p>
            <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;