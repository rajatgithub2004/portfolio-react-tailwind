import React from 'react'

function About() {
  return (
    <div name="about" className='w-full md:h-[50vh] h-[65vh] text-black'>
      <div className='max-w-screen-lg p-4 mx-auto flex justify-center flex-col w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About Us</p>
        </div>
        <p className='text-xl mt-15'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti sint id dicta culpa, dignissimos temporibus beatae. Sequi accusantium natus repellendus perferendis, ipsa, perspiciatis aliquam mollitia aperiam maxime similique dolorum.
        </p>
        <br />
        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa amet saepe. Facilis corporis voluptatem ipsum eligendi fugiat quisquam fugit!</p>
      </div>
    </div>
  )
}

export default About