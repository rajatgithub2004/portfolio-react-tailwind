import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from 'react-scroll'
function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'experience'
    },
    {
      id: 4,
      link: 'services'
    },
    {
      id: 5,
      link: 'contact'
    },

  ]
  return (
    <div className='flex justify-between items-center w-full h-15 text-black'>
      <div >
        <h1 className='px-0 text-lg md:text-2xl md:ml-1 '>WebSphere INNOVATIONS</h1>
      </div>
      <ul className='md:flex hidden mr-[11rem]'>
      {links.map(({id,link}) =>(
          <li key={id} className='px-4 capitalize cursor-pointer hover:scale-105 text-xl'><Link to={link} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>
      <div onClick={()=>{setNav(!nav)}}  className='md:hidden cursor-pointer mr-10  z-10 '>
        {nav? <FaTimes className='text-white' size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col items-center absolute bg-gradient-to-b from-black to-gray-800 text-white top-[-30px] left-[-33px] w-full h-[60vh] justify-center  '>
        {links.map(({id,link}) =>(
            <li key={id} className='capitalize cursor-pointer hover:scale-105 text-xl py-6 '><Link onClick={() =>{setNav(!nav)}} to={link} smooth duration={500}>{link}</Link></li>
          ))}
        </ul> 
      )}
       
    </div>
  )
}

export default Navbar
