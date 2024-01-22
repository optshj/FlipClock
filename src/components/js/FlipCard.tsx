import React,{useState} from 'react';
import styled,{keyframes} from 'styled-components';
interface FlipClockProps{
	count:number;
}
const Ul = styled.ul`
	list-style:none;
	box-shadow: 0 2px 5px rgba(0, 0, 0, .7);
	font-weight:bold;
	list-style:none;
`
const FlipCard = styled.li`
	position:absolute;
	&.back{
		z-index:2;
	}
	&.front{
		z-index:1;
	}
`
const Div = styled.div`
	position:absolute;
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
	border-radius:10px;
	background-color:#191919;
`
const Number = styled(Div)`
	font-size:80px;
	color:white;
	display:flex;
	height:200%;
	align-items:center;
	justify-content:center;
`
const Upper = styled(Div)`
	top:0;
	transform-origin:50% 100%;
	border-bottom:solid 2px black;
	animation: upperToMiddle .5s linear both;
`
const Lower = styled(Div)`
	bottom:0;
	transform-origin:50% 0%;
	& ${Number} {
		bottom:0;
	}
	animation: middleToLower .5s linear both;
`
const upperToMiddle = keyframes`
	0%{
		transform:rotateX(0deg);
	}
	100%{
		transform:rotateX(90deg);
	}
`
const middleToLower = keyframes`
	0%{
		transform:rotateX(90deg);
	}
	100%{
		transform:rotateX(0deg);
	}
`
function FlipClock({count}:FlipClockProps) {

	return(
		<>
			<Ul>
				{[...Array(10).keys()].map((num) => (
					<FlipCard
						key={num}
						className={`${num === count ? 'front':''}${num === (count+1)%10 ? 'back':''}`}
						>
						<Template>
							<Upper>
								<Number>
									{num}
								</Number>
							</Upper>
							<Lower>
								<Number>
									{num}
								</Number>
							</Lower>
						</Template>
					</FlipCard>
				))}
			</Ul>
		</>
	)
}

export default FlipClock;