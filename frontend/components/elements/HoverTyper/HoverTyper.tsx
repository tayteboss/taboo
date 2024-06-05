import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type Props = {
	data: string;
};

const HoverTyperWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

const Inner = styled.div`
	display: flex;
`;

const Span = styled(motion.span)`
	white-space: pre;
`;

const flickerVariants = {
	initial: { opacity: 1 },
	animate: (i: number) => ({
		opacity: 1,
		transition: {
			delay: i * 0.05,
			duration: 0.05
		}
	}),
	final: { opacity: 1 }
};

const getRandomChar = () => {
	const chars =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const randomIndex = Math.floor(Math.random() * chars.length);
	return chars[randomIndex];
};

const HoverTyper = ({ data }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const [displayedChars, setDisplayedChars] = useState<string[]>(
		data.split('')
	);

	useEffect(() => {
		if (isHovered) {
			const intervals: NodeJS.Timeout[] = [];
			const timeouts: NodeJS.Timeout[] = [];

			data.split('').forEach((_, i) => {
				intervals.push(
					setInterval(() => {
						setDisplayedChars((prevChars) => {
							const newChars = [...prevChars];
							newChars[i] = getRandomChar();
							return newChars;
						});
					}, 50)
				);

				timeouts.push(
					setTimeout(() => {
						setDisplayedChars((prevChars) => {
							const newChars = [...prevChars];
							newChars[i] = data[i];
							return newChars;
						});
						clearInterval(intervals[i]);
					}, i * 50 + 100)
				);
			});

			return () => {
				intervals.forEach((interval) => clearInterval(interval));
				timeouts.forEach((timeout) => clearTimeout(timeout));
			};
		} else {
			setDisplayedChars(data.split(''));
		}
	}, [data, isHovered]);

	return (
		<HoverTyperWrapper
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<Inner>
				{data.split('').map((char, i) => (
					<Span
						key={i}
						custom={i}
						variants={flickerVariants}
						initial="initial"
						animate={isHovered ? 'animate' : 'final'}
					>
						{displayedChars[i]}
					</Span>
				))}
			</Inner>
		</HoverTyperWrapper>
	);
};

export default HoverTyper;
