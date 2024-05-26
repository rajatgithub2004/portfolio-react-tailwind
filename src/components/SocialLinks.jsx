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
      href : 'https://www.linkedin.com/in/websphere-innovations-387b07307/',
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
    <div className="flex flex-row md:flex-col flex-wrap justify-center items-center">
      <ul className=" gap-5 mb-[3rem] text-white flex justify-between items-center w-auto h-14 px-4 bg-gray-700 rounded-tr-md rounded-br-md rounded-tl-md rounded-bl-md">
        <li>
          <a href={'https://www.linkedin.com/in/websphere-innovations-387b07307/'} target="_blank" className="flex items-center justify-center w-full text-white" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href={'https://github.com/rajatgithub2604'} target="_blank" className="flex items-center justify-center w-full text-white" rel="noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a href={'mailto:websphererinnovations@1999@gmail.com'} className="flex items-center justify-center w-full text-white" target="_blank">
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li>
          <a href={'https://www.instagram.com/websphereinnovations/'} className="flex items-center justify-center w-full text-white" target="_blank" rel="noreferrer">
            <FaInstagram size={30} />
          </a>
        </li>
      </ul>
      <p>Copyright &#169;. WebSphere INNOVATIONS 2024-2027 All rights reserved</p>
    </div>
  )
}

export default SocialLinks
