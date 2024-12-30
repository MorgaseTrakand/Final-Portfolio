import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import LandingPage from './LandingPage/LandingPage';

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
    </>    
  )
}
export default HomePage;