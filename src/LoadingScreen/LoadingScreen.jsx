import { useEffect, useState } from 'react';
import Ethan from './Ethan';
import Snyder from './Snyder';
import CircularText from './CircularText';
import CornerText from './CornerText';
import './LoadingScreen.css';
import gsap from 'gsap';

function LoadingScreen( { isLoaded } ) {

  useEffect(() => {
    // if (isLoaded) {
    //   const Ethan = document.querySelector('.Ethan');
    //   const Snyder = document.querySelector('.Snyder');
    //   Ethan.style.animation = "";
    //   Ethan.style.strokeDashoffset = '0';
    //   Ethan.setAttribute('fill', '#FFBF44'); // This explicitly sets the fill attribute.
    //   console.log(Ethan.style.animation)
    //   gsap.to(Ethan, {
    //     y: -100,
    //     duration: 0.4,
    //   })
    // }
  }, [isLoaded])

  return (
    <section className='position-absolute'>
      <div className='loading-screen-body'>
        <CornerText />
        <div className='radial-one'>
          <CircularText isLoaded={isLoaded}/>
          <div className='radial-two'>
            <div className='name-container'>
              <Ethan />
              <Snyder />
            </div>
            <div className='mask-border'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LoadingScreen;