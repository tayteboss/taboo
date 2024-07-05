import styled from 'styled-components';
import { motion, useAnimation, Variants } from 'framer-motion';
import { HomePageType } from '../../../shared/types/types';
import ProjectCard from '../../elements/ProjectCard';
import useViewportWidth from '../../../hooks/useViewportWidth';

type Props = {
	data: HomePageType['projects'];
	animation: ReturnType<typeof useAnimation>;
	isHovered: boolean;
	setIsHovered: (isHovered: boolean) => void;
};

const ProjectsWrapper = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
`;

const Inner = styled(motion.div)`
	height: 100%;
	width: 100%;
`;

const Slide = styled(motion.div)`
	position: absolute;
	z-index: 1;
	mix-blend-mode: normal;

	&:hover {
		z-index: 2;
		mix-blend-mode: normal;
	}
`;

const getRandomDirection = (index: number) => {
	const directions = [
		{ x: '-105vw', y: '-10vh' },
		{ x: '105vw', y: '-10vh' },
		{ x: '-105vw', y: '10vh' },
		{ x: '105vw', y: '10vh' }
	];
	return directions[index % directions.length];
};

const getRandomEndPosition = (index: number) => {
	const endPositions = [
		{ x: '105vw', y: '-30vh' },
		{ x: '-105vw', y: '30vh' },
		{ x: '105vw', y: '70vh' },
		{ x: '-105vw', y: '80vh' }
	];
	return endPositions[index % endPositions.length];
};

const getIntermediatePoint = (
	from: { x: string; y: string },
	to: { x: string; y: string }
) => {
	const fromX = parseFloat(from.x);
	const fromY = parseFloat(from.y);
	const toX = parseFloat(to.x);
	const toY = parseFloat(to.y);

	const midX = (fromX + toX) / 2;
	const midY = (fromY + toY) / 2;

	return {
		x: `${midX}vw`,
		y: `${midY}vh`
	};
};

const getSpeedsAndDelays = (isSmallScreen: boolean) => {
	const speeds = isSmallScreen
		? [
				15, 18, 20, 25, 22, 19, 17, 21, 23, 16, 18, 20, 25, 22, 19, 17,
				21, 23
		  ]
		: [
				25, 27, 26, 25, 24, 23, 25, 23, 26, 24, 25, 26, 24, 23, 25, 26,
				25, 24
		  ];

	const delays = isSmallScreen
		? [
				0, 8, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135,
				145, 155
		  ]
		: [0, 2, 4, 9, 11, 15, 19, 23, 28, 33, 37, 41, 45, 49, 53, 57, 59, 61];

	return { speeds, delays };
};

const getTotalCycleDuration = (isSmallScreen: boolean, totalCards: number) => {
	const { speeds, delays } = getSpeedsAndDelays(isSmallScreen);

	let maxDuration = 0;
	for (let i = 0; i < totalCards; i++) {
		const duration = speeds[i % speeds.length];
		const delay = delays[i % delays.length];
		const cardTotalTime = delay + duration;
		if (cardTotalTime > maxDuration) {
			maxDuration = cardTotalTime;
		}
	}
	return maxDuration;
};

const getTransition = (index: number, totalCycleDuration: number) => {
	const isSmallScreen = window.innerWidth < 768;
	const { speeds, delays } = getSpeedsAndDelays(isSmallScreen);

	const duration = speeds[index % speeds.length];
	const delay = delays[index % delays.length];

	return {
		duration: duration,
		delay: delay,
		ease: 'linear',
		repeat: Infinity,
		repeatDelay: totalCycleDuration - duration
	};
};

const Projects = (props: Props) => {
	const { data, animation, isHovered, setIsHovered } = props;

	const hasData = data && data.length > 0;

	const viewport = useViewportWidth();
	const isSmallScreen = viewport === 'mobile';

	const totalCycleDuration = getTotalCycleDuration(
		isSmallScreen,
		data.length
	);

	const slideVariants: Variants = {
		animate: (i: number) => {
			const from = getRandomDirection(i);
			const to = getRandomEndPosition(i);
			const intermediate = getIntermediatePoint(from, to);

			return {
				x: [from.x, intermediate.x, to.x],
				y: [from.y, intermediate.y, to.y],
				transition: getTransition(i, totalCycleDuration)
			};
		}
	};

	return (
		<>
			{hasData && (
				<ProjectsWrapper>
					<Inner animate={animation}>
						{data.map((project, i) => (
							<Slide
								key={i}
								custom={i}
								initial={{
									x: getRandomDirection(i).x,
									y: getRandomDirection(i).y
								}}
								animate="animate"
								variants={slideVariants}
								className="cursor-link"
							>
								<ProjectCard
									data={project}
									setIsHovered={setIsHovered}
									isHovered={isHovered}
								/>
							</Slide>
						))}
					</Inner>
				</ProjectsWrapper>
			)}
		</>
	);
};

export default Projects;
