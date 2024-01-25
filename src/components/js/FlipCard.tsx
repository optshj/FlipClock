import React,{useState} from 'react';
import styled,{keyframes} from 'styled-components';

interface FlipClockProps{
	count:number;
}


const Ul = styled.ul`
	list-style:none;
	position:relative;
	width:100px;
	height:200px;
	border-radius:10px;
`
const Div = styled.div`
	position:absolute;
	left:0;
	overflow:hidden;
	width:100%;
	height:50%;
`
const Number = styled(Div)`
	font-weight:bold;
	font-size:80px;
	color:white;
	display:flex;
	height:200%;
	align-items:center;
	justify-content:center;
	background-color:#191919;
	border-radius:10px;
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
const show = keyframes`
	0% {
		opacity:0;
	}
	100%{
		opacity:1;
	}
`
const hide = keyframes`
	0% {
		opacity:1;
	}
	100%{
		opacity:0;
	}
`
const increaseIndex = keyframes`
	0%{
		z-index:4;
	}
	100%{
		z-index:4;
	}
`
const Upper = styled(Div)`
	top:0;
	transform-origin:50% 100%;
`
const Lower = styled(Div)`
	bottom:0;
	transform-origin:50% 0%;
	${Number} {
		bottom:0;
	}
`
const FlipCard = styled.li`
	position: absolute;
	width: 100%;
	height: 100%;
	&.hide{
		visibility:hidden;
	}
	&.back{
		z-index:3;
		visibility:visible;
		${Upper}{
			z-index:2;
			animation: ${upperToMiddle} .5s linear both;
			&::before{
				animation: ${show} .5s linear both;
				background: linear-gradient(to top, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 1) 100%);
          		background: linear-gradient(to bottom, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 1) 100%);
			}
		}
		${Lower}{
			&::before{
				animation: ${show} .5s linear both;
			}
		}
	}
	&.front{
		z-index:2;
		visibility:visible;
		animation: ${increaseIndex} .5s .5s linear forwards;
		${Upper}{
			&::before{
				animation: ${hide} .5s .3s linear both;
			}
		}
		${Lower}{
			animation: ${middleToLower} .5s .5s linear both;
			&::before{
				animation: ${hide} .5s .3s linear both;
				background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .1) 100%);
          		background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .1) 100%);
			}
		}
	}
`
function FlipClock({count}:FlipClockProps) {

	return(
		<>
			<Ul>
				{[...Array(10).keys()].map((num) => (
					<FlipCard className={`${num === count ? 'back':''}${num === (count+1)%10 ? 'front':''} hide`}>
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
					</FlipCard>
				))}
			</Ul>
		</>
	)
}

export default FlipClock;