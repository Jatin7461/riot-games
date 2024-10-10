import gsap from "gsap"
import SplitText from "gsap-trial/SplitText"
import { useGSAP } from "@gsap/react"
import { RefObject, useRef } from "react"
import React from "react"

const Games = ({ heading }: { heading: string }) => {



    return <div
        className="games ">
        {/* <img className="riot-logo" src="riot-circle.png" alt="" /> */}
        <h1 className="name">{heading}</h1>
    </div>
}

export default Games