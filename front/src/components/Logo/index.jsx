import React from 'react'
import { motion } from 'framer-motion'
import * as S from './styled'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const transition = {
  default: { duration: 2, ease: "easeInOut" },
  fill: { duration: 2, ease: [1, 0, 0.8, 1] }
}

const Logo = (props) => {
  return (
    <motion.svg
      id="Logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1156.43 988"
      {...props}
    >
      <g id="Group">
        <g id="Book">
          <g id="Left">
            <S.Path
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={transition}

              className="cls-1"
              d="M139.64 875.36A485.42 485.42 0 01561.45 905q-23.07-277.83-46.15-555.7a465.19 465.19 0 00-425.12-39.25z"
              transform="translate(2.7 2.5)"
            />
            <S.Path
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={transition}

              className="cls-1"
              d="M0 406.71l48.82 558c.36 4.21 1.59 10.31 6.18 14.26 12.2 10.52 38.89-2.21 48.73-6.73 70.2-32.28 155.54-48.35 177.88-52.55 39.81-7.5 72.89-8.28 102.78-9a814.83 814.83 0 0199 3.68 527.47 527.47 0 00-91.09-26.56c-123.51-24.16-229.06 1.46-291.44 23L56.07 399.34z"
              transform="translate(2.7 2.5)"
            />
          </g>
          <g id="Right">
            <S.Path
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={transition}
            
              className="cls-1"
              d="M1011.39 875.36A485.42 485.42 0 00589.58 905l46.16-555.74a465.17 465.17 0 01425.11-39.25z"
              transform="translate(2.7 2.5)"
            />
            <S.Path
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={transition}

              className="cls-1"
              d="M1151 406.71l-48.81 558c-.37 4.21-1.6 10.31-6.18 14.26-12.21 10.52-38.89-2.21-48.73-6.73-70.2-32.28-155.55-48.35-177.89-52.55-39.81-7.5-72.89-8.28-102.78-9a814.92 814.92 0 00-99 3.68 527.33 527.33 0 0191.1-26.56c123.51-24.16 229.05 1.46 291.43 23L1095 399.34z"
              transform="translate(2.7 2.5)"
            />
          </g>
        </g>
        <S.Path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}

          id="Halo"
          className="cls-1"
          d="M575.52 93.29c-56.78 0-117.89-14.59-117.89-46.64S518.74 0 575.52 0 693.4 14.6 693.4 46.65s-61.11 46.64-117.88 46.64zm-92.34-46.64c3.1 6.35 33.66 21.2 92.34 21.2s89.23-14.85 92.34-21.2c-3.11-6.36-33.67-21.21-92.34-21.21s-89.24 14.85-92.34 21.21z"
          transform="translate(2.7 2.5)"
        />
        <S.Path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}

          id="Head"
          className="cls-1"
          d="M575.52 108.56c-33.47 0-68.42-5.08-91.5-15.8a117.89 117.89 0 10183 0c-23.09 10.72-58.02 15.8-91.5 15.8z"
          transform="translate(2.7 2.5)"
        />
      </g>
    </motion.svg>
  )
}

export default Logo
