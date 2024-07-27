import React from 'react'
import { github } from '../assets';
import { projects } from '../constant';
import { fadeIn, textVariant } from '../utils/motion';
import {motion} from 'framer-motion';
import { Tilt } from 'react-tilt';



const ProjectCard = ({index, name, tags, image, source_code_link, description}) => {
  return(
    <motion.div variants={fadeIn("up","spring", index * 0.5 , 0.75)}>
      <Tilt options={{max:45,speed:450,scale:1}} className="bg-[#333] p-5 rounded-2xl sm:w-[300px] w-full">
          <div className="relative w-full h-[180px] flex justify-center">
            <img src={image} alt='' className="w-full h-full rounded-2xl" />
              <div className="absolute m-3 inset-0 flex justify-end card-img_hover">
                <div 
                  onClick={() => window.open(source_code_link)}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img src={github} alt='' className="object-contain w-1/2 h-1/2"/>
                </div>
              </div>
          </div>
          <div className="mt-3">
            <h3 className="font-bold text-[24px]">{name}</h3>
            <p className="mt-3">{description}</p>
          </div>
          <div className="mt-3 flex gap-3">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
      </Tilt>
    </motion.div>
  )
}




const Works = () => {
  return (
    <>
      <motion.div className="pl-20 mt-20" variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My Work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] pl-20'
        >
          Following projects showcases my skills and experience through
          Each project is briefly described with
          links to code repositories
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-evenly px-[15px]'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default Works
