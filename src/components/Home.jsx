import React from 'react'
import companylogo from '../assets/companylogo.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll'
function Home() {
  return (
    <div name="home" className='w-full h-[70vh]'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full items-center px-4 md:flex-row'>
        
       
        <div className='flex flex-col justify-center h-full '>
          <h2 className='text-3xl sm:text-3xl sm:whitespace-nowrap font-bold'>Hello We are WebSphere INVOVATIONS</h2>
          <p className='text-gray-700 py-4 px-10 max-w-md'>We are a team of Web Developers, Graphic designers and Video Editors </p>
          <div className='flex justify-center md:'>
            <Link to='services' smooth duration={500} className='group text-white w-fit px-6 py-4 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-cyan-600 to-blue-600'>Services<span size={25} className='duration-300 group-hover:rotate-90 ml-1'><MdOutlineKeyboardArrowRight /></span></Link>
          </div>
        </div>
        <div>
          <img src={companylogo} alt='companylogo' className='rounded-2xl w-2/3 md:w-lg mx-auto'/>
        </div>
      </div>
    </div>
  )
}

export default Home