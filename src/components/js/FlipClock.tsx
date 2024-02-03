import React,{useState,useEffect} from 'react';
import styled from 'styled-components';


function FlipClock() {
	const [time,setTime] = useState(0);
	
	useEffect(()=> {
		setInterval(setTime(new Date()),1000); // 1초마다 시간 최신화
	},[]);
	
	return(
		<>

		</>
	)
}

export default FlipClock;