import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';
import { services } from '../constant';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-[500px] px-[20px] bg'>
    <motion.div 
      variants={fadeIn("top", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const About = () => {
  return (
  <>
    <motion.div>
      <p className="pl-10 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider ">Introduction</p>
      <h2 className="pl-10 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} className="pl-10 mt-5 text-[#f1f1f1] max-w-3xl leading-[25px]">
      I'm a skills software developer with the experience in Html and css, javascript, jquery, bootstrap , tailwind and framework React.js and Three.js 
    </motion.p>
    <div className="mt-20 flex items-center justify-center"  >
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
  </>
  )
}

export default SectionWrapper (About , "about")