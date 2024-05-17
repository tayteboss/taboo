import styled from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useEffect, useState } from 'react';

// Extend dayjs with the plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const TimeWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex: 1;
	}
`;

const Time = () => {
	const [timeStamp, setTimeStamp] = useState('');

	useEffect(() => {
		const updateTime = () => {
			const melbourneTime = dayjs()
				.tz('Australia/Melbourne')
				.format('hh:mm A [AEST]');
			setTimeStamp(melbourneTime);
		};

		updateTime(); // Initialize the timestamp immediately
		const interval = setInterval(updateTime, 60000); // Update every minute

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <TimeWrapper>{timeStamp}</TimeWrapper>;
};

export default Time;
