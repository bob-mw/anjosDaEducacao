import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 50rem;
  width: 20rem;
  background: linear-gradient(to left bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15); 
  backdrop-filter: blur(2rem);
  border-radius: 2rem 0 0 2rem;
  z-index:3;
  clip-path: circle(0 at 16.3rem 3.7rem);
`

export const Description = styled.p`
  position: absolute;
  top: 5.5rem;
  right: 1.7rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
`

const thickness = 6;

const Shape = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  width: 100%;
  height: ${thickness}px;
  border-radius: 3px;
  background: white;
`

export const Top = styled(Shape)`
  top: 0;
`

export const Middle = styled(Shape)`
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
`

export const Bottom = styled(Shape)`
  bottom: 0;
`

const side = 2.5;

export const ToggleBtn = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  margin: 1.5rem;
  width: ${side}rem;
  height: ${side}rem;
  z-index: 4;
  transition: transform 0.2s, opacity 0.2s !important;
  will-change: transform;
  &:hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
`

export const List = styled.ul`
  padding: 8rem 0 0 2rem;
  text-align: left;
  list-style: none;
`

export const Item = styled.li`  
  padding: 1rem 0;
  display: flex;
  font-size: 2rem;
  color: var(--bg-darker-orange);

  &:first-child {
      font-size: 3rem;
  }   
`
export const Link = styled(NavLink)`
  text-decoration: none !important;
  cursor: pointer;
  display: inline-block;
	padding: .75rem 1.25rem;
	border-radius: 10rem;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: .15rem;
	transition: all .3s;
	position: relative;
	overflow: hidden;
	z-index: 3;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--bg-dark-orange);
		border-radius: 10rem;
		z-index: -5;
	}
	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 100%;
		background-color: var(--bg-lighter-orange);
		transition: all .3s;
		border-radius: 10rem;
		z-index: -1;
	}

	&:hover {
		color: #fff;
		&:before {
			width: 100%;
		}
	}

`