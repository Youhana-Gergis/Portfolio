import React ,{Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float , OrbitControls , Preload , useTexture , } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Ball = (props) => {
const[decal] = useTexture([props.imgUrl]);  
  return (
    <Float floatIntensity={2} rotationIntensity={1} speed={1.75} rotateX={-5}>
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.5} />
      <directionalLight position={[0.9,0,1.5]} />
      <mesh castShadow receiveShadow scale={3} rotation={[0,1.3,0]}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial polygonOffset polygonOffsetFactor={1} flatShading color={"#FFF8EB"}/> /* flatShading --- not soft */ 
        <Decal
          position={[0,0,1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.3}
          map={decal} 
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return(
    <Canvas
     frameloop='demand'
     shadows
     camera={{position:[20,3,5] , fov:25}}
     gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload  all />
    </Canvas>
  )
}

export default BallCanvas
