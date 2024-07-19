import React, { useRef , useState} from 'react'
import {motion, useInView} from "framer-motion"
import "./portfolio.scss"

const Portfolio = () => {

  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    }
  }

  const [isHovered, setisHovered] = useState(false)
  const btnRef = useRef();
  const btnRef1 = useRef();
  const btnRef2 = useRef();
  const btnRef3 = useRef();
  const ref = useRef();

  const inView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div className='portfolio' variants={variants} initial="initial" /*whileInView="animate"*/ ref={ref} animate={"animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on helping your company grow<br/> and move forward</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="./focus.jpg" alt="" />
            <h1><motion.b whileHover={{color: "orange"}}>Key</motion.b> Focus</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color: "orange"}}>To Build </motion.b>a Website.</h1>
            <motion.button whileHover={{scale:1.1}}>Here We Go!</motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" onMouseEnter={() => btnRef.current.className = "button-hovered"} onMouseLeave={() => btnRef.current.className = "button"} whileHover={{scale: 1.02,backgroundColor: "gray", color: "black", transitionDuration: ".3s"}}>
            <h2>Functionality</h2>
            <p>Ensure the website has a clean, intuitive layout that makes it easy to find information and tools. Optimize for fast load times and ensure the site is fully responsive on all devices.</p>
            <button className='button' ref={btnRef}>See More</button>
        </motion.div>
        <motion.div className="box" onMouseEnter={() => btnRef1.current.className = "button-hovered"} onMouseLeave={() => btnRef1.current.className = "button"} whileHover={{scale: 1.02,backgroundColor: "gray", color: "black", transitionDuration: ".3s", }}>
            <h2>Design</h2>
            <p>Maintain a modern, professional design that appeals to developers. Incorporate interactive elements such as drag-and-drop interfaces, real-time collaboration tools, and live previews.</p>
            <button className='button' ref={btnRef1}>See More</button>
        </motion.div>
        <motion.div className="box" onMouseEnter={() => btnRef2.current.className = "button-hovered"} onMouseLeave={() => btnRef2.current.className = "button"} whileHover={{scale: 1.02,backgroundColor: "gray", color: "black", transitionDuration: ".3s"}}>
            <h2>Security and Scalability</h2>
            <p>Ensure secure login processes, possibly integrating with OAuth or similar services for authentication. Design the backend to handle increased traffic and data loads without performance degradation.</p>
            <button className='button' ref={btnRef2}>See More</button>
        </motion.div>
        <motion.div className="box" onMouseEnter={() => btnRef3.current.className = "button-hovered"} onMouseLeave={() => btnRef3.current.className = "button"} whileHover={{scale: 1.02,backgroundColor: "gray", color: "black", transitionDuration: ".3s"}}>
            <h2>User Experience </h2>
            <p>Ensure the site is accessible to users with disabilities by following best practices and standards. The website should be highly interactive which can engage many users.</p>
            <button className='button' ref={btnRef3}>See More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Portfolio
