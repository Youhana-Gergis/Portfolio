import React ,{useState ,useRef} from 'react'
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';
import EarthCanvas from './canvas/Earth';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs
        .sendForm(
          'service_piodwfs',
          'template_no7w1ck',
          form.current,
          'oR5aHhM-gcGYjCnJD',
        )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left','tween',0.2,1)} 
      className=" flex-[0.75] p-8 rounded-2xl m-5"
      style={{backgroundColor: 'rgba(29, 24, 54  , 1)'}}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]" >contact.</h3>

        <form 
          className='mt-12 flex flex-col gap-8'
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input 
              required
              type="text"
              name='from_name'
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              required
              type="email"
              name='from_email'
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              rows={7}
              name='message'
              placeholder="what do you want to say? "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          
          <button
            type='submit'
            value="Send"
            className="group relative font-sans text-[18px] w-32 text-white bg-gradient-to-b from-[#4dc7d9] to-[#66a6ff] px-6 py-3 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            <div className="svg-wrapper-1">
              <div
                className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white/20 transition-all duration-300 ease-in-out group-hover:bg-[#2ba9e4e5] group-hover:w-[25px] group-hover:h-[25px] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] fill-white transition-all duration-300 group-hover:w-[25px] group-hover:h-[25px] group-hover:rotate-[45deg] group-hover:mr-[5px]"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <span
              className="ml-2 block transition-all duration-500 group-hover:scale-0 group-hover:text-[0%] group-hover:opacity-0"
            >
              Send
            </span>
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
