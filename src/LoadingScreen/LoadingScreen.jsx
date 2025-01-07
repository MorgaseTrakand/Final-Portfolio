import Ethan from './Ethan';
import Snyder from './Snyder';
import CircularText from './CircularText';
import CornerText from './CornerText';
import './LoadingScreen.css';

function LoadingScreen( { isLoaded } ) {
  return (
    <section className='loadingscreen position-absolute'>
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