import gsap from "gsap"
import SplitText from "gsap-trial/SplitText"
import { useGSAP } from "@gsap/react"
import { RefObject, useRef } from "react"
import React from "react"
import { motion } from 'framer-motion'

const Games = ({ heading }: { heading: string }) => {


    let text = heading.split("")
    console.log(text)

    return <div
        className="games ">
        {/* <img className="riot-logo" src="riot-circle.png" alt="" /> */}
        <h1 className="name">{text.map((s, i) => {
            return <span className={`letter letter-${i}`} key={i}
                // initial={{ y: 100, opacity: 0 }}
                // animate={{ y: 0, opacity: 1, }}
                // transition={{ duration: 0.5, delay: (6 + i) * 0.1 }}
            >{s}</span>
        })}</h1>
    </div>
}

export default Games