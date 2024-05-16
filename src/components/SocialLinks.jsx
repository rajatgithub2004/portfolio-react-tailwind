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
    <div className="flex flex-row flex-wrap justify-center items-center">
      <ul className=" gap-5  text-white flex justify-between items-center w-auto h-14 px-4 bg-gray-700 rounded-tr-md rounded-br-md rounded-tl-md rounded-bl-md">
        <li>
          <a href={'https://www.linkedin.com/in/rajat-sharma-ba1226291/'} target="_blank" className="flex items-center justify-center w-full text-white" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href={'https://github.com/rajatgithub2004'} target="_blank" className="flex items-center justify-center w-full text-white" rel="noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a href={'mailto:websphererinnovations@1999@gmail.com'} className="flex items-center justify-center w-full text-white" target="_blank">
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li>
          <a href={'https://www.instagram.com/websphere_innovations/'} className="flex items-center justify-center w-full text-white" target="_blank" rel="noreferrer">
            <FaInstagram size={30} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
