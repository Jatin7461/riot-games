import { useGSAP } from "@gsap/react"
import React from "react"
import { RefObject } from "react"
import Header from "./Header"
import gsap from "gsap"
import Games from "./Games"
import SplitText from "gsap-trial/SplitText"
import Characters from "./Characters"
import { agentData, LeagueData, valorantData } from "../data/gameData"
const GameDesc = () => {

    const container: RefObject<HTMLInputElement> = React.createRef()
    let data: Array<agentData> = []
    let game = localStorage.getItem('game') || ""

    if (game === 'lol') {
        game = 'LEAGUE OF LEGENDS'
        data = LeagueData
    }
    else if (game === 'valo') {
        game = 'VALORANT'
        data = valorantData
    }
    else if (game === 'tft') {
        game = 'TEAMFIGHT TACTICS'
        data = valorantData
    }
    else if (game === 'lor') {
        game = 'LEGENDS OF RUNETERRA'
        data = valorantData
    }
    // useGSAP(() => {
    //     gsap.registerPlugin(SplitText)
    //     const split = new SplitText('.game-name', {
    //         type: "words,chars"
    //     })

    //     let chars = split.chars
    //     console.log(chars)
    //     gsap.timeline().from('.stag', {
    //         y: -100,
    //         opacity: 0,
    //         stagger: 0.2
    //     }).from(chars, {
    //         y: 100,
    //         opacity: 0,
    //         stagger: 0.1
    //     })
    //         .from('.char-card', {
    //             x: 200,
    //             opacity: 0,
    //             stagger: 0.3
    //         })
    // }, { scope: container })
    console.log(data)
    return <div ref={container} className='flex flex-col justify-between h-full'>
        <div className="flex flex-col">

            <Header />
            {/* <Games heading={game} /> */}
            <p className="text-white self-center game-name">{game}</p>
        </div>
        <div className="flex w-full self-end">
            <Characters bgColor={data[0].bgColor} name={data[0].name} description={data[0].description} image={data[0].image} />
            <Characters bgColor={data[1].bgColor} name={data[1].name} description={data[1].description} image={data[1].image} />
            <Characters bgColor={data[2].bgColor} name={data[2].name} description={data[2].description} image={data[2].image} />
            <Characters bgColor={data[3].bgColor} name={data[3].name} description={data[3].description} image={data[3].image} />
        </div>
    </div>
}


export default GameDesc