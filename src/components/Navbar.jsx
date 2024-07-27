import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {navLinks} from '../constant/index.js';
import {logo,menu,close} from '../assets';
const Navbar = () => {
  const [active , setActive] = useState("");
  const [toggle , setToggle] = useState(false);

  return (
    <nav className="px-5 w-full flex item-center py-5 fixed top-0 z-20 bg-[#000000]">
      <div className="w-full flex item-center justify-between max-w-7xl mx-auto">
        <Link to='/' className="flex item-center gap-2" onClick={() => {setActive(""); window.scrollTo(0,0);}}>
          <img src={logo} alt='' className="w-9 h-6 object-contain"/>
          <p className="flex text-white text-[18px] font">Youhana <span className="sm:block">| Front-End</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-gray-400"
              } hover:text-white text-[17px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end item-center">
          <img src={toggle ? close: menu} alt='' className="w-[28px] h-[28px] object-contain cursor-pointer"
           onClick={() => {setToggle(!toggle)}}
           />
           <div className={`${!toggle ? 'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end item-start flex-col gap-4'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${ active === nav.title ? "text-white" : "text-gray-400"} text-[15px] font-medium cursor-pointer`}
                onClick={() => { setActive(nav.title) , setToggle(!toggle);}}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
           </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
