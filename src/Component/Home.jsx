import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { PrimaryButton, Secondary } from "./ButtonGroup"
import Lanyard from "../Utilities/Lanyard"
import { motion } from "framer-motion"
import Cv from '../Assets/CV/LUTHFIE ARSYA DARMAPUTRA CV.pdf'

const Home = ({ IntoPage, AboutPage }) => {

    const ScrollIntoPage = (ref) => {
        AboutPage[ref]?.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div ref={IntoPage} className="h-screen w-full m-auto justify-center flex items-center font-['Poppins']">
            {/* Nama */}
            <div className="w-full md:h-full h-[80%] flex md:flex-row flex-col-reverse items-center justify-between">
                
                <div className="text-white ml-6 md:w-[60%] w-full h-full flex flex-col justify-center">
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        viewport={{ amount: 0.8 }}
                        className="md:text-5xl text-2xl ml-6 font-semibold"
                    >
                        Luthfie Arsya Darmaputra
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                        viewport={{ amount: 0.8 }}
                        className="md:text-lg text-md ml-6 italic"
                    >
                        FrontEnd Developer
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.8 }}
                        viewport={{ amount: 0.8 }}
                        className="flex flex-row w-full md:w-[40%] items-center justify-start ml-6 h-16"
                    >
                        <PrimaryButton 
                            functionButton={() => ScrollIntoPage('about')} 
                            text="About" 
                            className="w-28 h-10 mr-6 transition-all duration-300 hover:scale-110"
                        />

                        <Secondary 
                            text={
                                <a href={Cv} download>
                                    Download CV
                                </a>
                            } 
                            className="w-36 text-sm md:text-md h-10 transition-all duration-300 hover:scale-110"
                        />
                    </motion.div>
                </div>

                {/* card */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                    viewport={{ amount: 0.8 }}
                    className="h-full md:w-[40%] w-[80%] md:mr-6 flex items-center justify-center"
                > 
                    <Canvas camera={{ position: [2, 1, 5], fov: 25 }}>
                        <pointLight position={[10, 10, 5]} />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[-10, -10, -10]} />
                        <Lanyard />
                        <OrbitControls makeDefault />
                    </Canvas>
                </motion.div>

            </div>
        </div>
    )
}

export default Home