import styled from 'styled-components'


export const LinkStyleButton = styled.a`
font-size: 1.2rem;
text-decoration: none !important;
cursor: pointer;
display: inline-block;
padding: 1.5rem;
margin-top: 1.5rem;
border-radius: 2rem;
border: none;
color: #fff;
text-transform: uppercase;
letter-spacing: .15rem;
transition: all .3s;
position: relative;
overflow: hidden;
z-index: 1;
justify-self: center;

&:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--bg-dark-orange);
	border-radius: 10rem;
	z-index: -2;
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

export const Label = styled.label`
    font-size: 1.2rem;
    color: var(--bg-darker-orange);
`

export const LabelCheckBox = styled.label`
    font-size: 1.2rem;
    color: var(--bg-darker-orange);
`

export const Field = styled.input`
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0.375rem 0.75rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 2rem;
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.3);
`