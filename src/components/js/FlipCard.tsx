import styled,{keyframes} from 'styled-components';

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

const Ul = styled.ul`
	list-style:none;
	padding:0;
	margin:0;
	display:flex;
	justify-content: center;
	align-items: center;
	margin:10px;
	width:100px;
	height:150px;
`
const Div = styled.div`
	position:absolute;
	width:100%;
	height:50%;
	left:0;
	background-color:#333333;
	overflow:hidden;
	&::before {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        content: "";
    }
`
const Number = styled(Div)`
	display:flex;
	height:200%;
	align-items:center;
	justify-content:center;
	color:white;
	font-size:100px;
	font-weight:bold;
`
const Upper = styled(Div)`
	top:0;
	border-radius: 20px 20px 0 0;
	transform-origin:50% 100%;
	&::after {
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		z-index: 5;
        background-color: rgba(0,0,0,.4);
        content: "";
	}
`
const Lower = styled(Div)`
	bottom:0;
	border-radius: 0 0 20px 20px;
	transform-origin:50% 0%;
	& ${Number} {
		bottom:0;
	}
`
const FlipCard = styled.li`
	position:absolute;
	width:100px;
	height:150px;
	border-radius:20px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	&.back{
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
	&.front{
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

interface FlipClockProps{
	back:number;
	front:number;
}
function FlipClock({back,front}:FlipClockProps) {
	return(
		<Ul>
			{[...Array(10)].map((_,num) => (
				<FlipCard key={num} className={`${num === front ? 'front':''}${num === back ? 'back':''}`}>
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
	)
}

export default FlipClock;