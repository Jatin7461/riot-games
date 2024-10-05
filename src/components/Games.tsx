import gsap from "gsap"
import SplitText from "gsap-trial/SplitText"
import { useGSAP } from "@gsap/react"
import { RefObject, useRef } from "react"
import React from "react"

const Games = () => {

    const container: RefObject<HTMLInputElement> = React.createRef()
    // const container = useRef()

    // useGSAP(() => {
    //     gsap.registerPlugin(SplitText)
    //     let split = new SplitText('.name', {
    //         type: 'words,chars'
    //     })
    //     let chars = split.chars;

    //     gsap.timeline()
    //         // .to('.riot-logo', {
    //         //     x: 100,
    //         //     rotation: 90,
    //         //     opacity: 0,
    //         //     delay: 1
    //         // })
    //         .from(chars, {
    //             y: 100,
    //             opacity: 0,
    //             stagger: 0.2
    //         }).to('.name', {
    //             y: -100,
    //             scale:0.8
    //         })
    //     // gsap.to('.name', {
    //     //     x: 200,
    //     //     opacity: 0
    //     // })
    // }, { scope: container })

    return <div
        ref={container}
        className="games ">
        {/* <img className="riot-logo" src="riot-circle.png" alt="" /> */}
        <h1 className="name">RIOT GAMES</h1>
    </div>
}

export default Games