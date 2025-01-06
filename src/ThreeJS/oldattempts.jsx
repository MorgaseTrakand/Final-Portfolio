import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const fragmentShader = `
uniform vec3 iResolution;
uniform float iTime;

varying vec3 vNormal; // Normal from vertex shader
varying vec3 vPosition; // Position from vertex shader

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 p = 5.0 * ((fragCoord.xy - 0.5 * iResolution.xy) / iResolution.y) - 0.5;
  vec2 i = p;
	float c = 0.0;
	float r = length(p+vec2(sin(iTime),sin(iTime*.222+99.))*1.5);
	float d = length(p);
	float rot = d+iTime+p.x*.15; 
  
	for (float n = 0.0; n < 4.0; n++) {
		p *= mat2(cos(rot-sin(iTime/4.)), sin(rot), -sin(cos(rot)-iTime), cos(rot))*-0.15;
		float t = r-iTime/(n+1.5);
		i -= p + vec2(cos(t - i.x-r) + sin(t + i.y),sin(t - i.y) + cos(t + i.x)+r);
		c += 1.0/length(vec2((sin(i.x+t)/.15), (cos(i.y+t)/.15)));
	}
	c /= 4.0;
	fragColor = vec4(vec3(c)*vec3(4.3, 3.4, 0.1)-0.35, .1);
}

void main() {
    // Original shader effect
    vec4 originalEffect;
    mainImage(originalEffect, gl_FragCoord.xy);

    // Lighting calculations
    vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0)); // Directional light
    vec3 viewDir = normalize(-vPosition); // View direction (camera at origin)
    vec3 normal = normalize(vNormal); // Normalized normal vector

    float diff = max(dot(normal, lightDir), 0.0); // Diffuse lighting

    vec3 halfwayDir = normalize(lightDir + viewDir); // Halfway vector for specular
    float spec = pow(max(dot(normal, halfwayDir), 0.0), 32.0); // Specular lighting (shininess factor: 32)

    vec3 ambient = vec3(0.2); // Ambient light

    // Combine original effect with lighting
    vec3 lighting = diff * originalEffect.rgb + spec + ambient;
    gl_FragColor = vec4(lighting, 1.0);
}
`;

const vertexShader = `
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewDir;

uniform float iTime;
uniform vec3 iResolution;

float noise(vec2 p) {
    return sin(p.x * p.y + (2.0 * iTime)) * 0.5 + 0.5; // Simple noise for demo
}

void main() {
    vNormal = normalize(normalMatrix * normal); // Normal transformation
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz; // Position in view space
    
    // Calculate view direction (camera to object direction)
    vViewDir = normalize(-vPosition);

    // Organic displacement using sine function, noise, and view direction
    float displacement = sin(vPosition.x * 2.0 + iTime) * 0.1 + noise(vPosition.xy * 0.5) * 0.2;
    
    // Add a component of displacement based on the view direction
    float viewDisplacement = dot(vViewDir, vNormal) * 0.1; // Magnitude of displacement affected by view angle

    // Apply the displacement based on the normal and view direction
    vec3 displacedPosition = position + vNormal * (displacement + viewDisplacement);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
    
}
`;

function Model() {
  const sphere = useRef();
  
  useFrame(({ clock }) => {
    const material = sphere.current?.material;
    if (material && material.uniforms?.iTime) {
      // Update the iTime uniform on each frame
      material.uniforms.iTime.value = clock.getElapsedTime();
      material.needsUpdate = true; // Force the material to update
    }
  });

  // Ensure iResolution updates correctly on resize
  useEffect(() => {
    const handleResize = () => {
      const material = sphere.current?.material;
      if (material?.uniforms?.iResolution) {
        material.uniforms.iResolution.value = [
          window.innerWidth,
          window.innerHeight,
          1,
        ];
        material.needsUpdate = true;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <group>
        <mesh ref={sphere} position={[0, 0, 0]}>
          <sphereGeometry args={[5, 128, 128]} />
          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              iTime: { value: 0 },
              iResolution: { value: [window.innerWidth, window.innerHeight, 1] },
            }}
          />
        </mesh>
      </group>
      <OrbitControls />
    </>
  );
}

export default Model;