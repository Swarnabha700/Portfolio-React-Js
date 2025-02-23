import "./hero.scss"
import {motion} from "framer-motion"
import React from 'react'

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition :{
            duration: 1.3,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
}

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate: {
        x: "-220%",
        transition :{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
}



const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>SWARNABHA CHAKRABORTY</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See the latest works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Front-End Back-End Responsive Web Developer
            </motion.div>
            <div className="imageContainer">
                <img src="./hero.png" alt="" height="500px" />
            </div>
        </div>
    )
}

export default Hero
