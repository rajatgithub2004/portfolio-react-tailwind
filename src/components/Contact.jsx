import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full  h-screen text-black'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Contact</p>
          <p className='py-6'>Submit the form below to get in contact with us</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://api.web3forms.com/submit" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="hidden" name="access_key" value="626389c6-2dc2-419f-9951-290ffc5a2f14"/>
            <input type='text' name="name" placeholder='Enter your name..' className='p-2 border-2 rounded-md focus:outline-none bg-transparet text-black'/>
            <input type='text' name="email" placeholder='Enter your email..' className='my-4 p-2 border-2 rounded-md focus:outline-none bg-transparet text-black'/>
            <textarea name='message' placeholder='Enter your message...' rows='10' className='p-2 focus:outline-none bg-transparent border-2 text-black' />
            <button className='text-white px-6 py-3 mx-auto flex items-center rounded-md duration-300 hover:scale-110 bg-gradient-to-b from-cyan-600 to-blue-600'>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
