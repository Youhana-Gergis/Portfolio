import React, { Suspense, useEffect, useState , useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from 'framer-motion';
import { slideIn } from "../../utils/motion";
import { OrbitControls, Preload, useGLTF, Center } from "@react-three/drei";
import CanvasLoader from "../Loader";
import profileImage from '../../assets/profile1.jpeg';
import { githubIcon, gmailIcon, linkedinIcon, cancelicon } from '../../assets';

const Computers = ({ isMobile, onClick, clicked }) => {

  const computer = useGLTF("./Youhana/model2.glb");
  return (
    <group>
      <hemisphereLight intensity={5} groundColor='black' />
      <spotLight
        position={[10, 20, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.2}   
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={0} />
      <Center position={[0, -0.5, 0]}>
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          onClick={onClick}
          // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          // rotation={[-0.01, -0.2, -0.1]}
        />
      </Center>
    </group>
  );
};


const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false); 
  const [clicked , setClicked] = useState(false);
    const controlsRef = useRef();

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

    useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(clicked ? 2.5 : 0, -0.5, 0);
      controlsRef.current.update();
    }
  }, [clicked]);
  
  return (
    <>
    <Canvas 
      frameloop='demand'
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 8 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          // autoRotate
          enableZoom={true}
          // maxPolarAngle={Math.PI / 2} /* rotate اقدر الفها لفوق*/
          // minPolarAngle={Math.PI / 2} /* rotate اقدر الفها لتحت*/
        />
        <Computers isMobile={isMobile} clicked={clicked} onClick={() => setClicked((prev) => !prev)}/>
      </Suspense>

      <Preload all />
    </Canvas>


        <motion.div
          variants={slideIn('left','tween',0.2,1)}
        >
        {clicked && (
          <>

    <div className="group absolute top-1/2 left-4 -translate-y-1/2 z-50 w-[280px] h-[280px] bg-white rounded-[32px] p-[3px] shadow-[0_70px_30px_-50px_rgba(96,75,74,0.19)] transition-all duration-500 ease-in-out hover:rounded-tl-[55px]">

      <button
        className="absolute right-4 top-4 bg-transparent border-none"
        onClick={() => setClicked(false)}
      >
        <img src={cancelicon} alt="" className="object-contain w-1/2 h-1/2"/>
      </button>


      <div className="absolute w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left-[3px] rounded-[29px] z-[1] border-0 overflow-hidden transition-all duration-500 ease-in-out delay-200 group-hover:w-[100px] group-hover:h-[100px] group-hover:top-[10px] group-hover:left-[10px] group-hover:rounded-full group-hover:z-[3] group-hover:border-[7px] group-hover:border-[#fbb9b6] group-hover:shadow-[0_5px_5px_rgba(96,75,74,0.19)]">
        <img
          src={profileImage}
          alt="Profile"
          className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-[2.5] group-hover:object-[0px_25px]"
        />
      </div>


      <div className="absolute bottom-[3px] left-[3px] right-[3px] bg-[#fbb9b6] top-[80%] rounded-[29px] z-[2] shadow-[inset_0_5px_5px_rgba(96,75,74,0.19)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)] group-hover:top-[20%] group-hover:rounded-[80px_29px_29px_29px] group-hover:delay-200">
        <div className="absolute bottom-0 left-6 right-6 h-[160px]">
          <span className="block text-[1.1rem] text-white font-bold">Name: Youhana Gerges</span>
          <span className="block text-[0.9rem] text-white mt-1">Age: 21 </span>
          <span className="block text-[0.9rem] text-white mt-1" >phone: 01289587721 </span>
          <span className="block text-[0.9rem] text-white mt-1" >Email: youhanagergis02@gm.. </span>

          <div className="absolute bottom-4 w-full flex items-center justify-between">
            <div className="flex gap-2">
              <img src={githubIcon} alt="" className="object-contain w-1/5 h-1/5"/>
              <img src={gmailIcon} alt="" className="object-contain w-1/5 h-1/5"/>
              <img src={linkedinIcon} alt="" className="object-contain w-1/5 h-1/5"/>
            </div>

            <button className="w-2/5 bg-white text-[#fbb9b6] border-none rounded-[20px] text-[0.6rem] px-[0.6rem] py-[0.4rem] shadow hover:bg-[#f55d56] hover:text-white">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
          </>
        )}
      </motion.div>

    </>
  );
};

export default ComputersCanvas;