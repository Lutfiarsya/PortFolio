import Gmail from '../Assets/ContactIcons/Gmail.png'
import Whatsapp from '../Assets/ContactIcons/Whatsapp.png'
import LinkedIn from '../Assets/ContactIcons/LinkedIn.png'
import Instagram from '../Assets/ContactIcons/instagram.png'
import { useMediaQuery } from 'react-responsive'

const Contact = ({ IntoPage }) => {
const Mobile = useMediaQuery({ maxWidth: 768})
    return(
        <div ref={IntoPage} className="w-full md:h-[400px] h-[500px] flex bg-white flex flex-col items-center justify-around ">
            <h1 className='md:text-4xl text-xl font-semibold mt-6 text-black'>Contact Me, Let's Work Together</h1>
            <div className='w-[90%] h-[80%] items-center justify-between flex md:flex-row flex-col text-white p-4'>

                {/* Gmail */}
                <a href='mailto:lutfiarsya34@gmail.com' className='w-64 h-20 transition-all hover:scale-110 duration-500 flex flex-row md:flex-col bg-[--background] md:w-64 md:h-64 rounded-md items-center justify-around md:justify-center p-4'>
                    <img src={Gmail} width={Mobile ? 35 : 75} height={Mobile ? 35 : 75}/>
                    <div className='flex flex-col justify-between items-center md:mt-6'>
                    <p className='md:text-md text-xs'>Send me a Gmail</p>
                    <h2 className='italic md:text-sm text-xs '>lutiarsya34@gmail.com</h2>
                    </div>
                </a>

                {/* Whatsapp */}
                <a href='http://wa.me/6285774301300' className='w-64 h-20 transition-all hover:scale-110 duration-500 flex flex-row md:flex-col bg-[--background] md:w-64 md:h-64 rounded-md items-center justify-around md:justify-center p-4'>
                    <img src={Whatsapp} width={Mobile ? 35 : 75} height={Mobile ? 35 : 75}/>
                    <div className='flex flex-col justify-between items-center md:mt-6'>
                    <p className='md:text-md text-xs'>Call me on Whatsapp</p>
                    <h2 className='italic md:text-sm text-xs'>+62 857-7430-1300</h2>
                    </div>
                </a>

                {/* LinkedIn */}
                <a href='https://www.linkedin.com/in/luthfie-arsya-darmaputra-3641b6208/' className='w-64 h-20 transition-all hover:scale-110 duration-500 flex flex-row md:flex-col bg-[--background] md:w-64 md:h-64 rounded-md items-center justify-around md:justify-center p-4'>
                    <img src={LinkedIn} width={Mobile ? 35 : 75} height={Mobile ? 35 : 75}/>
                    <div className='flex flex-col justify-between items-center md:mt-6'>
                    <p className='md:text-md text-xs'>Lets Connect on LinkedIn</p>
                    <h2 className='italic md:text-sm text-xs'>Luthfie Arsya Darmaputra</h2>
                    </div>
                </a>

                
                {/* Instagram */}
                <a href='https://www.instagram.com/lutfrsya/' className='w-64 h-20 transition-all hover:scale-110 duration-500 flex flex-row md:flex-col bg-[--background] md:w-64 md:h-64 rounded-md items-center justify-around md:justify-center p-4'>
                    <img src={Instagram} width={Mobile ? 35 : 75} height={Mobile ? 35 : 75}/>
                    <div className='flex flex-col justify-between items-center md:mt-6'>
                    <p className='md:text-md text-xs'>Lets Mutual on Instagram</p>
                    <h2 className='italic md:text-sm text-xs'>@Lutfrsya</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact