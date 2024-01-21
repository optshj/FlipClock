import React,{ useEffect,useState } from 'react'
import styled from 'styled-components';
import FlipClock from './FlipCard';

function Clock(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(()=> {
            setCount((count+1)%10);
        },1000);
    })

    return(
        <>
            <FlipClock count={count}></FlipClock>
        </>
    )
}
export default Clock;