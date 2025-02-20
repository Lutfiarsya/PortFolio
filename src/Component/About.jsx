import { useMediaQuery } from 'react-responsive'
import Gif from '../Assets/GIF.gif'
import { motion } from 'framer-motion'


const About = ({IntoPage}) => {
    const Mobile = useMediaQuery({ maxWidth: 768})
    return(
        <div ref={IntoPage} className="bg-white rounded-t-3xl md:p-4 p-8 md:h-screen w-full m-auto justify-between flex flex-col md:flex-row items-center">
            <div className="md:w-[40%] w-full text-black h-[60%] flex flex-col justify-center md:ml-8 text-justify">
                <motion.h1 
                initial={{opacity: 0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, ease:'easeInOut'}}
                viewport={{amount: 0.8}}
                className="text-3xl md:text-5xl font-semibold">About Me</motion.h1>
                <motion.p 
                initial={{opacity: 0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, ease:'easeInOut', delay:0.3}}
                viewport={{amount: 0.8}}
                className="md:mt-4 md:text-md text-[14px] ">Hi, I’m Luthfie Arsya, I’m a passionate front-end developer and an aspiring AI engineer with a strong foundation in ReactJS, modern web technologies, and software development. I love building interactive, user-friendly applications and continuously improving my skills in front-end.
                <br/>
                <br/>
                I am currently a first-year student at Universitas Mercu Buana, majoring in Informatics Engineering. Before starting my studies, I took a gap year to focus on self-learning and explore web development, particularly ReactJS and JavaScript. This experience helped me gain hands-on knowledge in building scalable and efficient web applications.
                </motion.p>
            </div>
            <div>
                {Mobile ? null : 
                <div>
                <motion.img 
                initial={{opacity: 0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, ease:'easeInOut', delay:0.5}}
                viewport={{amount: 0.8}}
                src={Gif}/>
                </div>}
            </div>
        </div>
    )
}

export default About