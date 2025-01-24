import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import LandingPage from './LandingPage/LandingPage';
import PinnedTextContainer from './PinnedText/PinnedTextContainer';
import ThreeJS from './ThreeJS/ThreeJS';
import Gallary from './Gallary/Gallary';
import FooterSection from './Footer/FooterSection';

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVh(); // Set on initial load
    window.addEventListener('resize', updateVh); // Update on resize

    return () => {
      window.removeEventListener('resize', updateVh); // Cleanup
    };
  }, []);

  useEffect(() => {  
    history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <LoadingScreen isLoaded={isLoaded} />
      <LandingPage isLoaded={isLoaded} />
      <PinnedTextContainer />
      <ThreeJS setSceneLoaded={setIsLoaded}/>
      <Gallary />
      <FooterSection />
    </>
  );
}

export default HomePage;