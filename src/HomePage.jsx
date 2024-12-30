import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import LandingPage from './LandingPage/LandingPage';
import PinnedText from './PinnedText/PinnedText';

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(function() {
      setIsLoaded(true)
    }, 3000)
  })
  return (
    <>
      <LoadingScreen isLoaded={isLoaded}/>
      <LandingPage isLoaded={isLoaded}/>
      <PinnedText />
      <ThreeJS />
    </>    
  )
}
export default HomePage;