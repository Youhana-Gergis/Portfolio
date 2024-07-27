import React from 'react'
import { motion } from 'framer-motion';
import ComputerCanvas from './canvas/Computers';
import hero from '../assets/herobg.png';
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <img src={hero} alt="" className='absolute w-full h-screen' />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto px-16 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Youhana</span>
          </h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
            I Front-End, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputerCanvas />
      <div className="absolute xs:bottom-10 bottom-10 w-full flex item-center justify-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex item-center justify-center p-2">
          <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='absolute w-3 h-3 rounded-full bg-[#FFF] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
