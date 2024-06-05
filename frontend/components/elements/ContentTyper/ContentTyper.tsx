import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: string;
	isActive: boolean;
};

const ContentTyperWrapper = styled.div`
	padding-top: ${pxToRem(8)};
	width: 100%;
	z-index: 2;
	color: var(--colour-white);
	mix-blend-mode: difference;
	visibility: ${(props: { isActive: boolean }) =>
		props.isActive ? 'visible' : 'hidden'};
`;

const Inner = styled.div`
	display: flex;
`;

const Span = styled(motion.span)`
	white-space: pre;
`;

const flickerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	initial: { opacity: 0 },
	animate: (i: number) => ({
		opacity: 1,
		transition: {
			delay: i * 0.1,
			duration: 0.1
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

const ContentTyper = ({ data, isActive }: Props) => {
	const [displayedChars, setDisplayedChars] = useState<string[]>(
		data.split('')
	);

	useEffect(() => {
		if (isActive) {
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
				); // Staggered timing, ending after 2 seconds
			});

			return () => {
				intervals.forEach((interval) => clearInterval(interval));
				timeouts.forEach((timeout) => clearTimeout(timeout));
			};
		} else {
			setDisplayedChars([]);
		}
	}, [data, isActive]);

	return (
		<ContentTyperWrapper isActive={isActive}>
			<Inner>
				{data.split('').map((char, i) => (
					<Span
						key={i}
						custom={i}
						variants={flickerVariants}
						initial="hidden"
						animate={isActive ? 'animate' : 'final'}
						exit="hidden"
					>
						{displayedChars[i]}
					</Span>
				))}
			</Inner>
		</ContentTyperWrapper>
	);
};

export default ContentTyper;
