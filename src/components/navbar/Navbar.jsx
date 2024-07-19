import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* {sidebar} */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
         initial={{opacity:0, scale:0.5}} 
         animate={{opacity:1, scale:1}} 
         transition={{duration:0.5}}>My Portfolio</motion.span>
        <div className='social'>
          <a href="https://www.facebook.com/profile.php?id=100008266057134" target='blank'><img src="./facebook.png" alt="" /></a>
          <a href="https://www.instagram.com/chakrabortyswarnabha700/" target='blank'><img src="./instagram.png" alt="" /></a>
          <a href="https://github.com/Swarnabha700" target='blank'><img src="./github.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/swarnabha-chakraborty/" target='blank'><img src="./linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
