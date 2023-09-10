import React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function App() {
  const lightsGroupRef = React.useRef();

  useFrame(() => {
    const speed = 0.0025;
    const delta = (1 + Math.sin(Date.now() * speed)) / 2;
    {
      const x = THREE.MathUtils.mapLinear(delta, 0, 1, -10, 10);
      const z = THREE.MathUtils.mapLinear(delta, 0, 1, -10, 10);
      lightsGroupRef.current.position.x = x;
      lightsGroupRef.current.position.z = z;
    }
  });

  return (
    <React.Fragment>
      <color args={["#333333"]} attach="background" />
      <ambientLight intensity={2} />
      <hemisphereLight args={["#0000ff", "#00ff00"]} intensity={0.6} />
      <group ref={lightsGroupRef} position={[10, 20, 10]}>
        <spotLight
          castShadow
          power={400}
          intensity={400}
          angle={THREE.MathUtils.degToRad(5)}
          penumbra={0.5}
          decay={2}
          distance={0}
        />
      </group>
      <mesh castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial color="crimson" side={THREE.FrontSide} />
      </mesh>
      <mesh receiveShadow>
        <boxGeometry args={[4, 2, 4]} />
        <meshPhysicalMaterial color="white" side={THREE.BackSide} />
      </mesh>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls makeDefault />
    </React.Fragment>
  );
}
