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
            delay: 1
        }, "0")
        
    },[])

    return (
        <>
            <S.HeroContainer>
                <S.HeroTitle><span ref={addToHeroTexts}>Você não pode mudar o mundo,</span></S.HeroTitle>
                <S.HeroTitle><span ref={addToHeroTexts}>mas pode mudar o mundo de alguém!</span></S.HeroTitle>
            </S.HeroContainer>
            <S.HeroContainer>
                <S.HeroSubtitle><span ref={addToHeroTexts}>Anjos da Educação</span></S.HeroSubtitle>
            </S.HeroContainer>
            <S.HeroContainer>
                <S.HeroSubtitle><span ref={addToHeroTexts}>Como acontece?</span></S.HeroSubtitle>
            </S.HeroContainer>
            <S.Image src={ angel } alt="logo"/>
            <FormsLogin />
            <Footer/>
        </>
    );
}

export default Login;
