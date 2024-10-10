import Games from './Games';
import Header from './Header';
import GameCard from './GameCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Observer from 'gsap/Observer';
import { RefObject } from 'react';
import React from 'react';

const scaleFunction = (classname: string) => {
    console.log(classname)
    classname = '.' + classname
    Observer.create({
        target: classname,
        onHover: () => {
            gsap.to(classname, {
                scale: 1.05
            })
        },
        onHoverEnd: () => {
            gsap.to(classname, {
                scale: 1
            })
        },
        onClick: () => {

        }
    })
}

const HomePage = () => {
    const container: RefObject<HTMLInputElement> = React.createRef()

    useGSAP(() => {

        gsap.from('.game-card', {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            delay: 1.5
        })

        gsap.timeline()
            .from('.stag', {
                y: -100,
                opacity: 0,
                stagger: 0.1,
            })
            .from('.letter', {
                y: 100,
                opacity: 0,
                stagger: 0.1
            })
            // .from('.game-card', {
            //     y: 100,
            //     opacity: 0,
            //     stagger: 0.2,
            //     delay: 0.2
            // })
            .to('.letter-9', {
                rotation: 180,
                color: 'red',
                duration: 0.2
            })
            .to('.letter-2', {
                rotation: 180,
                color: 'red',
                duration: 0.2
            })
            .to('.letter-8', {
                rotateX: 180,
                color: 'red',
                duration: 0.2
            })
            .to('.letter-3', {
                rotateY: 180,
                color: 'red',
                duration: 0.2
            })
            .to(['.lor', '.tft', '.lol', '.valo'], {
                delay: 0.5,
                scale: 1.05,
                duration: 0.4
            })
            .to(['.lor', '.tft', '.lol', '.valo'], {
                scale: 1
            })
    }, { scope: container })
    return <div ref={container} className='flex flex-col h-full'>
        <Header />
        <Games heading="RIOT GAMES" />
        <div className='flex gap-2 m-4'>

            <GameCard a='lol' cb={scaleFunction} />
            <GameCard a='valo' cb={scaleFunction} />
            <GameCard a='tft' cb={scaleFunction} />
            <GameCard a='lor' cb={scaleFunction} />
        </div>
    </div>
}

export default HomePage