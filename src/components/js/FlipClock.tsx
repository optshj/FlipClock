import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
	position:absolute;
	z-index:1;
	left:0;
	overflow:hidden;
	width:100%;
	height:50%;
`
const Template = styled.div`
	position:absolute;
	box-shadow:0 2px 5px rgba(0,0,0,.7);
	width:100px;
	height:150px;
	border:1px solid gray;
	border-radius:10px;
	background-color:#191919;
`
const Upper = styled(Div)`
	top:0;
	transform-origin:50% 100%;
	border-bottom:solid 2px black;
`
const Lower = styled(Div)`
	top:0;
	transform-origin:50% 0%;
`
const Number = styled(Div)`
	font-size:80px;
	color:white;
	display:flex;
	height:200%;
	align-items:center;
	justify-content:center;
`

function FlipClock() {
	
	
	return(
		<>
			<Template>
				<Upper>
					<Number>
						1
					</Number>
				</Upper>
				<Lower>
					<Number>
						1
					</Number>
				</Lower>
			</Template>
		</>
	)
}

export default FlipClock;