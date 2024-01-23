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
const Div = styled.div`
	z-index:1;
	position:absolute;
	left:0;
	overflow:hidden;
	width:100%;
	height:50%;
	&::before {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        content: "";
    }
`
const Number = styled(Div)`
	z-index:1;
	font-size:80px;
	color:white;
	display:flex;
	height:200%;
	align-items:center;
	justify-content:center;
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
	border-bottom:solid 2px black;
`
const Lower = styled(Div)`
	bottom:0;
	transform-origin:50% 0%;
	& ${Number} {
		bottom:0;
	}
`
const FlipCard = styled.li`
	position:absolute;
	&.front{
		z-index:3;
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
	&.back{
		z-index:2;
		animation: ${increaseIndex} .5s .5s linear forwards;
		${Upper}{
			&::before{
				animation: ${hide} .5s .5s linear both;
			}
		}
		${Lower}{
			animation: ${middleToLower} .5s .5s linear both;
			&::before{
				animation: ${hide} .5s .5s linear both;
				background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .1) 100%);
          		background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .1) 100%);
			}
		}
	}
`
const Template = styled.div`
	position:absolute;
	box-shadow:0 2px 5px rgba(0,0,0,.7);
	width:100px;
	height:150px;
	border-radius:10px;
	background-color:#191919;
`
function FlipClock({count}:FlipClockProps) {

	return(
		<>
			<Ul>
				{[...Array(10).keys()].map((num) => (
					<FlipCard className={`${num === count ? 'front':''}${num === (count+1)%10 ? 'back':''}`}>
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