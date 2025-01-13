import { Canvas } from '@react-three/fiber';
import Scene from './ThreeJSText';
import './footer.css';

function FooterSection() {
  return (
      <div className='footer-container'>
        <div className='final-cta-container'>
          <div className='final-cta-border'>
            <Canvas
              dpr={[1, 2]}
              gl={{
                antialias: true,
                preserveDrawingBuffer: true,
              }}
              camera={{
                fov: 55,
                near: 0.1,
                far: 200,
              }}
            >
              <Scene />
            </Canvas>          
          </div>
        </div>
        <footer>
          <div className='footer-left'>
            <button></button>
          </div>
          <div className='footer-right'>
            <h1>ETHAN SNYDER</h1>
            <h2>Copyright © 2025. All Rights Reserved.</h2>
          </div>
        </footer>
      </div>    
  )
}
export default FooterSection;