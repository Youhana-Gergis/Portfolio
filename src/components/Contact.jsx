import React ,{useState ,useRef} from 'react'
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';
import EarthCanvas from './canvas/Earth';


const Contact = () => {

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div variants={slideIn('left','tween',0.2,1)} 
      className=" flex-[0.75] p-8 rounded-2xl m-5"
      style={{backgroundColor: 'rgba(29, 24, 54  , 1)'}}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]" >contact.</h3>

        <form 
          className='mt-12 flex flex-col gap-8'
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input 
              type="text"
              name='name'
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name='email'
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name='message'
              placeholder="what do you want to say? "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button type='submit' className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            Send
          </button>
        </form>
      </motion.div>
      <motion.div 
        variants={slideIn('right','tween','0.2','1')} 
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact , "contact")
