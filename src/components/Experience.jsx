import React from 'react'

import html from '../assets/html.png'
import jsvascript from '../assets/javascript.png'
import express from '../assets/expressjs.jpg'
import mongodb from '../assets/mongodb.jpg'
import react from '../assets/react.png'
import canva from '../assets/canva.png'
import adobepr from '../assets/adobepr.png'
import node from '../assets/node.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import photoshop from '../assets/photoshop.jpg'

function Experience() {
  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'     
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style : 'shadow-blue-500'     
    },
    {
      id: 3,
      src: tailwind,
      title: 'Tailwind CSS',
      style : 'shadow-sky-400'     
    },
    {
      id: 4,
      src: jsvascript,
      title: 'JavaScript',
      style : 'shadow-yellow-500'     
    },
    {
      id: 5,
      src: react,
      title: 'ReactJS',
      style : 'shadow-blue-600'     
    },
    {
      id: 6,
      src: node,
      title: 'NodeJS',
      style : 'shadow-green-700'     
    },
    {
      id: 7,
      src: nextjs,
      title: 'NextJS',
      style : 'shadow-slate-300'     
    },
    {
      id: 8,
      src: express,
      title: 'ExpressJS',
      style : 'shadow-slate-500'     
    },
    {
      id: 9,
      src: mongodb,
      title: 'MongoDb',
      style : 'shadow-green-500'     
    },
    {
      id: 10,
      src: canva,
      title: 'Canva',
      style : 'shadow-sky-400'     
    },
    {
      id: 11,
      src: photoshop,
      title: 'Adobe Photoshop',
      style : 'shadow-sky-800'     
    },
    {
      id: 12,
      src: adobepr,
      title: 'Adobe Premier pro',
      style : 'shadow-blue-700'     
    },
  ]
  return (
    <div name="experience" className='w-full mt-10'> 
      <div className='text-black max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>Technologies our team can work with</p>
        </div>
        <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'> 
          {tech.map(({id,src,title,style})=>(
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img className='w-20 mx-auto' src={src} />
            <p className='mt-4'>{title}</p>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Experience
