import NextJs from '../Assets/SkillsAssets/NextJsIcon.png'
import ReactJs from '../Assets/SkillsAssets/ReactIcon.png'
import Tailwind from '../Assets/SkillsAssets/tailwindCssIcon.png'
import JavaScript from '../Assets/SkillsAssets/JavascriptIcon.png'
import Html from '../Assets/SkillsAssets/Html.png'
import Git from '../Assets/SkillsAssets/GitIcon.png'
import Css from '../Assets/SkillsAssets/CssIcon.png'
import Marquee from 'react-fast-marquee'
import { useMediaQuery } from 'react-responsive'


const Icon = [Html ,NextJs, ReactJs, Tailwind, JavaScript, Git,Css]


const MarqueeIcons = () => {
const Mobile = useMediaQuery({maxWidth: 768})
    return(
    <div className='w-[95%] rounded-md z-10 flex justify-center flex-row items-center overflow-y-hidden'>
        <Marquee speed={50} gradient={false} loop={0}>
            {Icon.map((items) => {
                return(
                    <div className='w-full items-center flex h-full'>
                        <img className='mx-10' src={items} width={Mobile ? 100 : 150} height={Mobile ? 100 : 150}/>
                    </div>
                    )
                })}
        </Marquee>     
    </div>
    )
}

export default MarqueeIcons;