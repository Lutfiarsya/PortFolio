import { useState } from "react"
import Navbar from "./Component/Navbar"

const Parent = ({children, dataRef}) => {
    return(
        <div>
            <Navbar dataRef={dataRef}/>
            <div className="flex flex-col min-h-screen items-center justify-center m-auto">
                {children}
            </div>
        </div>
    )
}

export default Parent