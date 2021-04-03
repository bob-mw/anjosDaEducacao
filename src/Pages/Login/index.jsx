import React, {useRef, useEffect} from 'react';
import gsap from 'gsap'

import FormsLogin from '../../components/FormsLogin/index';
import angel from '../../img/angel.svg';
import Footer from '../../components/Footer';

import * as S from './styled'

const Login = () => {

    let timeline = useRef()
    let heroTexts = useRef([])

    const addToHeroTexts = (el) => {
        if (el && !heroTexts.current.includes(el)) {
          heroTexts.current.push(el)
        }
    }
    //let timeline = useState(new TimelineMax({paused: true})) //Outra possibilidade

    useEffect(()=>{

        timeline.current = gsap.timeline({ease: "SlowMo.easeOut"})
        .to(heroTexts.current, {
            y: "0%",
            duration: 0.7,
            stagger: 0.2,
            delay: 2
        }, "0")
        
    },[])

    return (
        <>
            <S.HeroContainer>
                <S.HeroText><span ref={addToHeroTexts}>Você não pode mudar o mundo,</span></S.HeroText>
                <S.HeroText><span ref={addToHeroTexts}>mas pode mudar o mundo de alguém!</span></S.HeroText>
            </S.HeroContainer>
            <S.Image src={ angel } alt="logo"/>
            <FormsLogin />
            <Footer/>
        </>
    );
}

export default Login;
