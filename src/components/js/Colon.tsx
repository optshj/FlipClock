import React from 'react';
import styled from 'styled-components';

const Dot = styled.div`
	font-size:80px;
	font-weight:bold;
	transform:translate(0%,60%);
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`
function Colon(){
	
	return(
		<>
			<Dot>:</Dot>
		</>
	)
}

export default Colon;