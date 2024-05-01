import { useEffect, useState } from 'react';
import styled from 'styled-components';

import FlipCard from './FlipCard';
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
`;

const ClockForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& > * {
		margin-left: 60px;

		&:first-child {
			margin-left: 0;
		}
	}
`;

function Clock() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	const smoothTimeFront = (time: number) => Math.floor(time / 10);
	const smoothTimeBack = (time: number) => (time === 0 ? 5 : Math.floor(time / 10) - 1);
	const smoothHourFront = (time: number) => Math.floor(time / 10);
	const smoothHourBack = (time: number) => (time === 0 ? 2 : Math.floor(time / 10) - 1);
	const minimumTime = (time: number) => (time === -1 ? 9 : time);

	return (
		<ClockForm>
			<FlipForm>
				<FlipCard back={smoothHourBack(hours)} front={smoothHourFront(hours)} />
				<FlipCard back={(hours - 1) % 10} front={hours % 10} />
			</FlipForm>

			<Colon />

			<FlipForm>
				<FlipCard back={smoothTimeBack(minutes)} front={smoothTimeFront(minutes)} />
				<FlipCard back={minimumTime(minutes - 1) % 10} front={minutes % 10} />
			</FlipForm>

			<Colon />

			<FlipForm>
				<FlipCard back={smoothTimeBack(seconds)} front={smoothTimeFront(seconds)} />
				<FlipCard back={minimumTime(seconds - 1) % 10} front={seconds % 10} />
			</FlipForm>
		</ClockForm>
	);
}

export default Clock;
