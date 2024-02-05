import React,{ useEffect,useState } from 'react'
import styled from 'styled-components';
import FlipClock from './FlipCard';
import Colon from './Colon';



const ClockForm = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    & > *:not(:last-child) {
        margin-right: 100px;
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
	const mininum_time = (time:number) => {
		if (time === 0) {
			return 9;
		}
		return time;
	}
    return(
        <>	
			<ClockForm>
				<FlipClock back={smooth_time_back(hours)} front={smooth_time_front(hours)} ></FlipClock>
				<FlipClock back={(hours-1)%10} front={(hours)%10}></FlipClock>
			
				<Colon></Colon>
			
				<FlipClock back={smooth_time_back(minutes)} front={smooth_time_front(minutes)}></FlipClock>
				<FlipClock back={mininum_time(minutes)%10} front={(minutes)%10}></FlipClock>
			
				<Colon></Colon>
			
				<FlipClock back={smooth_time_back(seconds)} front={smooth_time_front(seconds)}></FlipClock>
				<FlipClock back={mininum_time(seconds)%10} front={(seconds)%10}></FlipClock>
			</ClockForm>
        </>
    )
}
export default Clock;