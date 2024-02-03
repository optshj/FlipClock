import React,{ useEffect,useState } from 'react'
import styled from 'styled-components';
import FlipClock from './FlipCard';
const ClockForm = styled.div`
	display:flex;
	flex-direction:row;
	gap:100px;
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

    return(
        <>	
			<ClockForm>
				<FlipClock count={Math.floor(hours/10)-1}></FlipClock>
				<FlipClock count={hours%10-1}></FlipClock>

				<FlipClock count={Math.floor(minutes/10)-1}></FlipClock>
				<FlipClock count={minutes%10-1}></FlipClock>

				<FlipClock count={Math.floor(seconds/10)-1}></FlipClock>
				<FlipClock count={seconds%10-1}></FlipClock>
			</ClockForm>
        </>
    )
}
export default Clock;