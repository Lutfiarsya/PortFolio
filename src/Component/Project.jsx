import ProjectComp from "./Project/ProjectComp"
import SotoIcons from '../Assets/ProjectIcons/Soto.png'
import WeatherIcons from '../Assets/ProjectIcons/cloudy.png'
import AnimeIcons from '../Assets/ProjectIcons/otaku.png'
import Fasilkom from '../Assets/ProjectIcons/Mercubuana.png'
import { motion } from "framer-motion"

const Project = ({IntoPage}) => {

    return(
        <div ref={IntoPage} className="h-full w-full m-auto justify-betwween  flex flex-col items-center p-6">
            <div className="w-full flex justify-start md:ml-8">
            <motion.h1
            initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, ease:'easeInOut'}}
            viewport={{once: true}}
            className="text-white text-5xl font-semibold">Project</motion.h1>
            </div>
            <div className="h-full w-full flex flex-col md:grid grid-cols-3 gap-x-2 gap-y-10 justify-center items-center mt-8">


                <ProjectComp 
                id={'Soto Uswatun'}
                Title={'Soto Uswatun'} 
                Img={SotoIcons} Desc={'Soto Uswatun adalah usaha kuliner yang menghadirkan berbagai varian soto khas Indonesia dengan cita rasa autentik dan bahan berkualitas. Kami berkomitmen untuk menyajikan soto dengan bumbu khas yang kaya rempah, memberikan pengalaman makan yang lezat dan memuaskan bagi setiap pelanggan.'}
                LinkProject={'Soto Uswatun'} 
                Link={'https://soto-uswatun.vercel.app/'} 
                LinkRepo={'https://github.com/Lutfiarsya/ProjectWirausaha'}
                delay={0}
              
                
                />    


                <ProjectComp 
                id={'Weather Web'}
                Title={'Weather Web'} 
                Link={'https://weatherweb-lutfiarsya.vercel.app/'} 
                LinkProject={'Weather Web'} 
                Img={WeatherIcons} 
                Desc={'Sebuah platform cuaca berbasis web yang menyediakan informasi cuaca secara real-time dengan integrasi API cuaca terkini. Website ini memungkinkan pengguna untuk melihat perkiraan cuaca, suhu, kelembaban, kecepatan angin, dan kondisi atmosfer lainnya secara akurat berdasarkan lokasi pengguna.'}
                LinkRepo={'https://github.com/Lutfiarsya/WeatherWeb'}
                delay={0.1}
                />


                <ProjectComp
                id={'Web Anime'}
                Title={'Web Anime - Clone'}
                Link={'https://anime-web-clone.vercel.app/'}
                Img={AnimeIcons}
                Desc={'Sebuah platform berbasis web yang memungkinkan pengguna untuk menjelajahi katalog anime secara real-time dengan integrasi Jikan API. Website ini menghadirkan informasi detail anime, episode, rating, genre, serta rekomendasi anime terkait.Didesain dengan UI modern dan responsif.'}
                LinkRepo={'https://github.com/Lutfiarsya/AnimeWebClone'}
                LinkProject={'Web Anime - Clone'}
                delay={0.2}
                />  
                  

                <ProjectComp
                id={'Fasilkom'}
                Title={'Fasilkom - Mercu Buana'}
                Link={'https://fasilkom-mercu-buana.vercel.app/'}
                Desc={'Sebuah Website yang memudahkan Mahasiswa, Dosen, Tata Usaha pada Fakultas Ilmu Komputer untuk Pendataan Program-Program Seperti MBKM,Capstone Project, Kerja Praktik dan Tugas Akhir dengan Transparan. Website ini menampilkan UI yang berbeda tiap User dan Fitur nya.'}
                LinkRepo={'https://github.com/Lutfiarsya/FasilkomMercuBuana'}
                LinkProject={'Sistem Manajemen Fasilkom'}
                Img={Fasilkom}
                delay={0.3}
                />
            </div>
        </div>
    )
}

export default Project
