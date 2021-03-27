import React, {useRef} from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './useDimensions'

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

import * as S from './styled'

const Menu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
  
    return (
        <>
            <S.ToggleBtn 
            onClick={() => toggleOpen()}
            animate={isOpen ? "open" : "closed"}
            >
                <S.Top 
                    variants={{
                        closed: {
                            scale: 1,
                            top: 0,
                            rotate: 0,
                        },
                        open: {
                            scale: 1.2,
                            top: "45%",
                            rotate: 45,
                        }
                    }}
                />
                <S.Middle
                variants={{
                    closed: {
                        width: "100%",
                    },
                    open: {
                        width: 0,
                    }
                }}
                />
                <S.Bottom
                    variants={{
                        closed: {
                            scale: 1,
                            bottom: 0,
                            rotate: 0,
                        },
                        open: {
                            scale: 1.2,
                            top: "45%",
                            bottom:"0%",
                            rotate: -45,
                        }
                    }}
                />
            </S.ToggleBtn>
            <S.Sidebar ref={containerRef}/>
        </>
    )
}

export default Menu