import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'

import FormsLogin from '../../components/FormsLogin/index'
import angel from '../../img/angel.svg'
import Footer from '../../components/Footer'

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

    let title = "Você não pode mudar o mundo, mas pode mudar o mundo de alguém!"

    return (
        <>  
            <S.HeroContainer>
                <S.HeroTitle>
                    {title.split(" ").map(function(word, index){
                        return <span ref={addToHeroTexts} key={index} data-title={word}>{`${word}\u00A0`}</span>
                    })}
                </S.HeroTitle>
            </S.HeroContainer>
            <S.HeroContainer>
                <S.HeroSubtitle><span ref={addToHeroTexts}>Anjos da Educação</span></S.HeroSubtitle>
                <S.HeroText>
                    <span ref={addToHeroTexts}>
                        A iniciativa desse projeto se deu a partir de um desafio do Hackaton proposto pelo Grupo FCamara. 
                        A ideia era criar uma solução para viabilizar doações de materiais escolares para crianças de escolas públicas.
                        Nosso objetivo é que as doações ocorram em qualquer lugar de modo que o doador possa ajudar de forma online e 
                        ainda ter papelarias parceiras que possam ter uma maior visibilidade financeira e social. 
                    </span>
                </S.HeroText>
            </S.HeroContainer>
            <S.HeroContainer>
                <S.HeroSubtitle><span ref={addToHeroTexts}>Como acontece?</span></S.HeroSubtitle>
                <S.HeroText>
                    <span ref={addToHeroTexts}>
                        O pai/mãe/responsável legal de um aluno cadastra em nosso site e seleciona os materiais que sua criança 
                        está precisando por meio de uma lista já cadastrada em nosso site. O doador (de forma anônima ou não) entra no site 
                        e seleciona o aluno que quer ajudar. Ele visualiza a lista de pedidos já cadastrados ou tem a opção de escolher por escola. 
                        Quando a meta de doação do aluno for completa, o nosso sistema envia para a papelaria um aviso e a papelaria se encarrega de 
                        entregar à escola do aluno todo material.
                    </span>
                </S.HeroText>
            </S.HeroContainer>
            <S.Image src={ angel } alt="logo"/>
            <FormsLogin />
            <Footer/>
        </>
    );
}

export default Login;
