import { Html } from "@react-three/drei";
import { useThree, Canvas, useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef, useMemo } from "react";
import html2canvas from "html2canvas";
import * as THREE from "three";
import fragment from "./shaders/fragment";
import vertex from "./shaders/vertex";
import CustomShaderMaterial from "three-custom-shader-material";

function ThreeJSContent() {
  const [domEl, setDomEl] = useState(null);
  const { viewport } = useThree();
  const materialRef = useRef();
  const [texture, setTexture] = useState(null);
  useDomToCanvas(domEl, setTexture, texture);
  useEffect(() => {
    if (texture) {
      console.log("Texture is loaded:", texture);
    }
  }, [texture]);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [texture]
  );

  return (
    <>
      <Html zIndexRange={[-1, -10]} prepend fullscreen>
        <div className="centered" ref={(el) => setDomEl(el)}>
          <h1 className="final-cta-text">
            <span className="gold-text">Let's</span> Create <br /> Something{" "}
            <span className="gold-text">Special</span>
          </h1>
        </div>
      </Html>
      {texture && <mesh>
        <planeGeometry args={[viewport.width, viewport.height, 254, 254]} />
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={THREE.MeshStandardMaterial}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms}
          flatShading
        />
      </mesh>}
    </>
  );
}


function  ThreeJSText() {
  return (
    <Canvas>
      <ThreeJSContent />
    </Canvas>
  );
}
export default ThreeJSText;



const useDomToCanvas = (domEl, setTexture, texture) => {
  useEffect(() => {
    if (!domEl) return;
    const convertDomToCanvas = async () => {
      const canvas = await html2canvas(domEl, { backgroundColor: null });
      setTexture(new THREE.CanvasTexture(canvas));
    };
    convertDomToCanvas();
  }, [domEl]);
};