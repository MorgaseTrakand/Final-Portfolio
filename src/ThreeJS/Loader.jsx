  import { useEffect, useState } from 'react';
  import { useProgress } from '@react-three/drei';


  export default function LoaderModule({ setSceneLoaded }) {
      const { active, progress } = useProgress()
      const [time, setTime] = useState(null)

      useEffect(() => {
        if (!time) {
          setTime(new Date().getTime() / 1000)
        }

        if (!active) {
          let currentTime = new Date().getTime() / 1000;
          if (currentTime - time < 1) {
            setTimeout(() => {
              setSceneLoaded(true);
            }, 1200 - (currentTime - time) * 1000);
          } else {
            setSceneLoaded(true)
          }
        }
      }, [progress])
    

      return (
          <>
          </>
      );
  }