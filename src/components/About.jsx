import React from 'react'

function About() {
  return (
    <div name="about" className='w-full md:h-[50vh] h-full text-black'>
      <div className='max-w-screen-lg p-4 mx-auto flex justify-center flex-col w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About Us</p>
        </div>
        <p className='text-xl mt-15'>
          At WebSphere INNOVATIONS, we specialize in crafting captivating logos, dynamic websites, and polished video edits to elevate your brand's digital presence.
        </p>
        <br />
        <p className='text-xl'>
          With extensive experience in web development, video editing, and graphic designing, We bring a diverse skill set to every project. From crafting visually appealing websites that offer seamless user experiences to producing captivating video content and designing striking visuals.
        </p>
      </div>
    </div>
  )
}

export default About
