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
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.height = 'auto';
      document.body.style.overflow = '';
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoaded={isLoaded} />
      <LandingPage isLoaded={isLoaded} />
      <PinnedTextContainer />
      <ThreeJS />
      <Gallary />
      <FooterSection />
    </>
  );
}

export default HomePage;