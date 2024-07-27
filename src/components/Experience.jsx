import React from 'react'
import { motion } from 'framer-motion';
import { VerticalTimeline ,VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { experiences } from '../constant';
import SectionWrapper from '../hoc/SectionWrapper';

const ExperienceCard = ({experience}) => {
  return(
    <VerticalTimelineElement 
    contentStyle={{background:"#1d1836", color:"#FFF"}} /* div  */ 
    contentArrowStyle={{borderRight:"7px solid #FFF"}} /* arrow  */
    iconStyle={{background: experience.iconBg}} /* style circle */
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <img src={experience.icon} alt="" className="w-[60%] h-[60%] object-contain" />
      </div>
    }
    >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
    </div> 
      <ul className="list-disc ml-7 mt-5">
        {experience.points.map((point, index) => (
           <li className="mt-3"
            key={`${index}`}
           >
            {point}
           </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}


const Experience = () => {
  return (
    <>
      <motion.div className="pl-20">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mt-10">What i have done so far</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience , index) => (
              <ExperienceCard key={`${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience , "work") 
