import React, { useRef } from 'react'
import "./projects.scss"
import { delay, motion, transform, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: 'Spotify Clone',
        img: "./spotify.png",
        desc: "A clone of a spotify website. Added own albums with songs. It has a playbar consisting Play, Pause button and a Volume rocker. Used HTML, CSS and Javascript to build the website.",
        link:"https://modifiedspotify.freewebhostmost.com/"
    },
    {
        id: 2,
        title: 'React TODO-List',
        img: "./TODOlist.png",
        desc: "A Todo List app using React js. We can store, edit as well as delete todos. Local Storage feature of Javascript is used to save the todos. Used HTML, Tailwind CSS, Javascript, React Js to build this website. ",
        link: "https://swarnabha700.github.io/TODO-List-using-React/"
    },
    {
        id: 3,
        title: 'Password Manager',
        img: "./PWmanager.png",
        desc: "Easy to use Password Manager. Here we can save Passwords along with Website and Username. We can Edit, Copy as well as Delete those. This is the Local storage version. It has a separate MongoDB version where I used React js, Tailwind CSS, Express js and MongoDB.",
        link: "https://swarnabha700.github.io/Password-Manager-with-Local-Storage/"
    },
    {
        id: 4,
        title: 'Next js Music Academy',
        img: "./MusicAcademy.png",
        desc: "Our very own music academy website built with Next Js. Used Aceternity UI to add many cool styles."
    },
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section>
            <div className='container'>
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target='blank'><motion.button whileHover={{backgroundColor: "#750d6b", color: "white", scale: 1.1}}>See Demo</motion.button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress,
        {
            stiffness: 100,
            damping: 60,
        }
    );

    return (
        <div className='projects' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Projects
