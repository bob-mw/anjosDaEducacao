import React, { useRef, useState, useEffect} from 'react'
import gsap from "gsap"
import * as S from "./styled"

const Menu = () => {

    let sidebar = useRef(null)
    let lineOne = useRef(null)
    let lineTwo = useRef(null)
    let lineThree = useRef(null)
    let menuItems = useRef([])
    menuItems.current = []

    const addToMenuItems = (el) => {
        if (el && !menuItems.current.includes(el)) {
          menuItems.current.push(el)
        }
    }

    let timeline = useRef()
    //let timeline = useState(new TimelineMax({paused: true})) //Outra possibilidade
    const [menuExpanded, setMenuExpanded] = useState(false)

    useEffect(()=>{
        timeline.current = gsap.timeline({paused: true})
        .to(sidebar.current, 0.5, {
            clipPath: "circle(200% at 16.3rem 3.7rem)",
            ease: "slow"
        }, 0)
        .to(lineOne.current, 0.5, {
            scaleX: 1.3,
            top: "50%",
            rotation: 45,
            ease: "power3"
        }, 0)
        .to(lineTwo.current, 0, { 
            autoAlpha: 0,
            ease: "power3"
        }, 0)
        .to(lineThree.current, 0.5, {
            scaleX: 1.3,
            bottom: "0%",
            top: "50%",
            rotation: -45,
            ease: "power3",
        }, 0)
        .staggerFrom(menuItems.current, 1, {x: -200, opacity: 0, ease: "power3"}, 0.1)
        .reverse()
        
    },[])

    useEffect(() => {
        //timeline.current.reversed(!menuExpanded) //Outra possibilidade
        menuExpanded === true ? timeline.current.play() : timeline.current.reverse()
    },[menuExpanded])      

    return (
        <>
            <S.ToggleBtn onClick={() => setMenuExpanded(!menuExpanded)}>
                <S.Top ref={lineOne}></S.Top>
                <S.Middle ref={lineTwo}></S.Middle>
                <S.Bottom ref={lineThree}></S.Bottom>
            </S.ToggleBtn>
            <S.Sidebar ref={sidebar}/>
        </>
    )
}

export default Menu

