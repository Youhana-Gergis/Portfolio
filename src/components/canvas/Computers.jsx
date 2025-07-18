import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {

  const computer = useGLTF("./Youhana/model2.glb");
  return (
    <group>
      <hemisphereLight intensity={5} groundColor='black' />
      <spotLight
        position={[10, 20, 10]} // فوق ويمين شوية
        angle={0.3}             // زاوية إضاءة أوسع شوية
        penumbra={0.5}          // حواف ناعمة
        intensity={1.2}         // إضاءة معتدلة
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={0} />
      <Center position={[0, -0.5, 0]}>
        <primitive
          object={computer.scene} 
          scale={isMobile ? 0.7 : 0.75}
          // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          // rotation={[-0.01, -0.2, -0.1]}
        />
      </Center>
    </group>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  
  return (
    <>
    <Canvas 
      frameloop='demand'
      camera={{ position: [20, 3, 5], fov: 8 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          // maxPolarAngle={Math.PI / 2} /* rotate اقدر الفها لفوق*/
          // minPolarAngle={Math.PI / 2} /* rotate اقدر الفها لتحت*/
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
    </>
  );
};

export default ComputersCanvas;
