import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive object={earth.scene} scale={3} />
  );
}

const EarthCanvas = () => {
  return(
    <Canvas 
      frameloop='demand'
      shadows
      gl={{preserveDrawingBuffer:true}}
      camera={{
        fov:45,
        near:0.1,
        far:300,
        position:[-4,3,8]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        autoRotate
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas
