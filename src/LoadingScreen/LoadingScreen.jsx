import { useEffect, useState } from 'react';
import Ethan from './Ethan';
import Snyder from './Snyder';
import CircularText from './CircularText';
import CornerText from './CornerText';
import './LoadingScreen.css';

function LoadingScreen() {

  useEffect(() => {
    
  }, [])

  return (
    <div className='loading-screen-body'>
      <CornerText />
      <div className='radial-one'>
        <CircularText />
        <div className='radial-two'>
          <div className='name-container'>
            <Ethan />
            <Snyder />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoadingScreen;