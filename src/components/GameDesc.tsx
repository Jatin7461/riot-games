import { useGSAP } from "@gsap/react"
import React from "react"
import { RefObject } from "react"
import Header from "./Header"
import gsap from "gsap"
const GameDesc = () => {

    const container: RefObject<HTMLInputElement> = React.createRef()

    useGSAP(() => {
        gsap.timeline().from('.stag', {
            y: -100,
            opacity: 0,
            stagger: 0.2
        })
    }, { scope: container })

    return <div ref={container} className='flex flex-col h-full'>
        <Header />

    </div>
}


export default GameDesc