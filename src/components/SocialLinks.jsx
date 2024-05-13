import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

function SocialLinks() {
  const links = [
    {
      id: 1,
      child :(
        <> 
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href : 'https://www.linkedin.com/in/rajat-sharma-ba1226291/',
      style : 'rounded-tr-md'
    },
    {
      id: 2,
      child :(
        <> 
          Github <FaGithub size={30} />
        </>
      ),
      href : 'https://github.com/rajatgithub2004',
      style : 'rounded-tr-md'
    },
    {
      id: 3,
      child :(
        <> 
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href : 'mailto:websphereinnovations1999@gmail.com',     
    },
    {
      id: 4,
      child :(
        <> 
          Instagram <FaInstagram size={30} />
        </>
      ),
      href : 'https://www.instagram.com/websphere_innovations/',
      style : 'rounded-tr-md'
    },

  ]
  return (
    <div className='lg:flex flex-col lg:top-[35%] lg:left-0 fixed'>
      <ul>       
        <li className={'ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] text-white flex justify-between items-center w-40 h-14 px-4 bg-gray-700 rounded-tr-md' }><a href={'https://www.linkedin.com/in/rajat-sharma-ba1226291/'} className='flex justify-between items-center w-full text-white' target='_blank'><>Linkedin <FaLinkedin size={30} /></></a></li>      
        <li className={'ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] text-white flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ' }><a href={'https://github.com/rajatgithub2004'} className='flex justify-between items-center w-full text-white' target='_blank'><>Github <FaGithub size={30} /></></a></li>      
        <li className={'ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] text-white flex justify-between items-center w-40 h-14 px-4 bg-gray-700' }><a href={'mailto:websphereinnovations@1999@gmail.com'} className='flex justify-between items-center w-full text-white' target='_blank'><>Mail <HiOutlineMail size={30} /></></a></li>      
        <li className={'ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] text-white flex justify-between items-center w-40 h-14 px-4 bg-gray-700 rounded-br-md' }><a href={'https://www.instagram.com/websphere_innovations/'} className='flex justify-between items-center w-full text-white' target='_blank'><>Instagram <FaInstagram size={30} /></></a></li>      
      </ul>
    </div>
  )
}

export default SocialLinks