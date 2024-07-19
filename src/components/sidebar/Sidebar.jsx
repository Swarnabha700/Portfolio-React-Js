import React from 'react'
import "./sidebar.scss"
import { useState } from 'react'
import {delay, motion} from "framer-motion"
import ToggleButton from './toggleButton/ToggleButton'
import Links from './links/Links'

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 10,
    },
  },
  closed: {
    clipPath: "circle(24px at 40px 45px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
}

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}  variants={variants}>
      <motion.div className='bg'>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
