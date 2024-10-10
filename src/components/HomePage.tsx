import Games from './Games';
import Header from './Header';
import GameCard from './GameCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';
import Observer from 'gsap/Observer';
import { Outlet } from 'react-router-dom';
import Transition from './Transition';
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


        gsap.registerPlugin(SplitText)
        let split = new SplitText('.name', {
            type: 'words,chars'
        })
        let chars = split.chars;
        console.log(chars)
        gsap.timeline()
            // .to('.riot-logo', {
            //     x: 100,
            //     rotation: 90,
            //     opacity: 0,
            //     delay: 1
            // })
            .from('.stag', {
                y: -100,
                opacity: 0,
                stagger: 0.1,
                // duration: 0.1
            })
            .from(chars, {
                y: 100,
                opacity: 0,
                stagger: 0.1
            })

            // .to('.name', {
            //   y: -100,
            //   scale: 0.8
            // })
            .from('.game-card', {
                y: 100,
                opacity: 0,
                stagger: 0.2,
            })
            // .to(chars[1], {
            //     rotation: 180,
            //     color: 'red',
            //     duration: 0.2
            // })
            .to(chars[8], {
                rotation: 180,
                color: 'red',
                duration: 0.2
            })
            .to(chars[2], {
                rotation: 180,
                color: 'red',
                duration: 0.2
            })
            .to(chars[7], {
                rotateX: 180,
                color: 'red',
                duration: 0.2
            })
            .to(chars[3], {
                rotateY: 180,
                color: 'red',
                duration: 0.2
            })
            // .to('.lol', {
            //     scale: 1.05,
            //     duration: 0.1
            // })
            // .to('.lol', {
            //     scale: 1
            // })
            // .to('.valo', {
            //     scale: 1.05,
            //     duration: 0.1
            // })
            // .to('.valo', {
            //     scale: 1
            // })
            // .to('.tft', {
            //     scale: 1.05,
            //     duration: 0.1
            // })
            // .to('.tft', {
            //     scale: 1
            // })
            .to(['.lor', '.tft', '.lol', '.valo'], {
                delay: 0.5,
                scale: 1.05,
                duration: 0.4
            })
            .to(['.lor', '.tft', '.lol', '.valo'], {
                scale: 1
            })
        // .to(chars[1], {
        //     rotation: 180,
        //     duration: 2,
        //     delay: 1
        // })
        // .to(chars[2], {
        //     rotation: 180,
        //     duration: 0.2
        //     , delay: 5
        // })
        // .to(chars[8], {
        //     rotation: 180,
        //     duration: 0.2
        //     , delay: 5
        // })
        // .to(chars[1], {
        //     rotation: 180,
        //     duration: 0.2
        //     , delay: 5
        // })
    }, { scope: container })
    return <div ref={container} className='flex flex-col h-full'>
        <Header />
        <Games heading="RIOT GAMES"/>
        <div className='flex gap-2 m-4'>

            <GameCard a='lol' cb={scaleFunction} />
            <GameCard a='valo' cb={scaleFunction} />
            <GameCard a='tft' cb={scaleFunction} />
            <GameCard a='lor' cb={scaleFunction} />
        </div>
    </div>
}

export default HomePage