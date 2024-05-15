import React from 'react'
import graphicdesign from '../assets/services/graphicdesign.jpg'
import webdev from '../assets/services/webdev.png'
import videoedit from '../assets/services/videoediting.jpg'

function Services() {
  return (
    <div name="services" className='w-full text-black md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-700'>Our Services</p>
        </div>
        <div className='grid grid-rows-3 gap-10 md:grid-cols-3 w-full'>
        
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img className='rounded-md duration-200 hover:scale-105 cursor-pointer' src={videoedit}  alt='graphicdesign' />
            <div className='flex items-center flex-col justify-center'>
              <h1 className='font-bold mb-3'>Video Editing</h1>
              <p className="font-normal">A polished video edit boosts brand visibility, engages audiences effectively, and drives conversion. Our team has experience in editing videos for all businesses from startups to big brands.</p>
            </div>
          </div>
        
        
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img className='rounded-md duration-200 hover:scale-105 cursor-pointer' src={graphicdesign}  alt='graphicdesign' />
            <div className='flex items-center flex-col justify-center'>
              <h1 className='font-bold mb-3'>Graphic Designing</h1>
              <p className="font-normal">We are your one-stop solution for your complete graphic design requirements. Uplift your brand's perception through our unmatched creative solutions. </p>
            </div>
          </div>
        
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img className='rounded-md duration-200 hover:scale-105 cursor-pointer' src={webdev}  alt='graphicdesign' />
            <div className='flex items-center flex-col justify-center'>
              <h1 className='mb-3 font-bold'>Website Building</h1>
              <p className="font-normal">We build exceptional web experiences making the best use of technology and innovation. Our team has experience in developing websites for all businesses from startups to big brands.</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Services
