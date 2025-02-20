import { motion } from "framer-motion"

export const PrimaryButton = ({functionButton, text, style}) => {
    return(
        <motion.button className={`rounded-lg bg-orange-400 ${style} text-white`} onClick={functionButton}>{text}</motion.button>
    )
}


export const Secondary = ({functionButton, text, style}) => {
    return(
        <motion.button className={`rounded-lg bg-[--background] border border-white  ${style}`} onClick={functionButton}>{text}</motion.button>
    )
}