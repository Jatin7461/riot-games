import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Observer from "gsap/Observer"
import { useNavigate } from "react-router-dom"

type gc = {
    a: string,
    cb: Function
}

const GameCard = ({ a, cb }: gc) => {

    const navigate = useNavigate()


    useGSAP(() => {
        gsap.registerPlugin(Observer)

        cb(a)

    })

    return <div className={`game-card rounded-md flex-1 ${a}`}

    // onClick={() => {


    //     gsap.timeline().to('.transition', {
    //         width: 2000,
    //         height: 1440,
    //         duration: 1.05,
    //     }).to('.transition', {
    //         width: 0,
    //         height: 0,
    //         duration: 0,
    //     })

    //     localStorage.setItem('game', a)

    //     setTimeout(() => {
    //         navigate('/game')
    //     }, 1000)
    // }}
    >

    </div>
}

export default GameCard