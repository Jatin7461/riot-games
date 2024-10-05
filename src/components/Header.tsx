import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"
import { RefObject } from "react"

const Header = () => {

    const container: RefObject<HTMLInputElement> = React.createRef()

    // useGSAP(() => {
    //     gsap.from('.stag', {
    //         y: -100,
    //         opacity: 0,
    //         stagger: 0.3
    //     })
    // }, { scope: container })

    return <div ref={container} className="header flex  items-center justify-between">
        <div className="flex gap-32 ml-8">

            <img width={100} className="logo stag" src="riot-games.png" />
            <input className="stag rounded-3xl px-12 bg-slate-700 opacity-70" placeholder="Search Game"></input>
        </div>

        <div className="flex text-white gap-20 mr-10">
            <p className="stag">About Us</p>
            <p className="stag">Games</p>
            <p className="stag">Menu</p>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} className="stag" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
            {/* <span className="transition"></span> */}
        </div>
    </div>
}

export default Header;