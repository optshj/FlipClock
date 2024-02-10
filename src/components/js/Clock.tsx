import React,{ useEffect,useState } from 'react'
import styled from 'styled-components';

import FlipClock from './FlipCard';
import Colon from './Colon';


const FlipForm = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
	& > * {
		margin-left: 120px;
		&:first-child {
			margin-left: 0;
		}
	}
	@media (max-width:1000px) and (min-width:850px){
		& > * {
			margin-left: 12vw;
			&:first-child {
				margin-left: 0;
			}
		}
    }
	@media (max-width:850px){
		& > * {
			margin-left: 102px;
			&:first-child {
				margin-left: 0;
			}
		}
	}
	
`
const ClockForm = styled.div`
	display:flex;
	justify-content: center;
    align-items: center;
	& > * {
		margin-left: 60px;
		&:first-child {
			margin-left: 0;
		}
	}
	@media (max-width:1000px) and (min-width:850px){
		& > * {
			margin-left: 6vw;
			&:first-child {
				margin-left: 0;
			}
		}
    }
	@media (max-width:850px){
		& > * {
			margin-left: 51px;
			&:first-child {
				margin-left: 0;
			}
		}
	
	}
	
`

function Clock(){
    const [currentTime,setCurrentTime] = useState(new Date());
	
	
    useEffect(()=>{
        const intervalId = setInterval(()=> {
            setCurrentTime(new Date());
        },1000);
        return () => clearInterval(intervalId);
    },[])
	
	const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
	
	const smooth_time_front = (time:number) => {
		if (time === 0) {
			return 0;
		}
		return Math.floor((time)/10);
	}
	const smooth_time_back = (time:number) => {
		if (time === 0) {
			return 5;
		}
		return Math.floor((time)/10)-1;
	}
	
	const smooth_hour_front = (time:number) => {
		return Math.floor((time)/10);
	}
	const smooth_hour_back = (time:number) => {
		if (time === 0) {
			return 2;
		}
		return Math.floor((time)/10)-1;
	}
	
	const mininum_time = (time:number) => {
		if (time === -1) {
			return 9;
		}
		return time;
	}
	
	
    return(
        <>	
			<ClockForm>
				<FlipForm>
					<FlipClock back={smooth_hour_back(hours)} front={smooth_hour_front(hours)} ></FlipClock>
					<FlipClock back={(hours-1)%10} front={(hours)%10}></FlipClock>
				</FlipForm>

					<Colon></Colon>

				<FlipForm>
					<FlipClock back={smooth_time_back(minutes)} front={smooth_time_front(minutes)}></FlipClock>
					<FlipClock back={mininum_time(minutes-1)%10} front={(minutes)%10}></FlipClock>
				</FlipForm>

					<Colon></Colon>

				<FlipForm>
					<FlipClock back={smooth_time_back(seconds)} front={smooth_time_front(seconds)}></FlipClock>
					<FlipClock back={mininum_time(seconds-1)%10} front={(seconds)%10}></FlipClock>
				</FlipForm>
			</ClockForm>
        </>
    )
}
export default Clock;