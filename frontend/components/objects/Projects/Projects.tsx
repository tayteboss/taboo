import styled from 'styled-components';
import { motion, useAnimation, Variants } from 'framer-motion';
import { HomePageType } from '../../../shared/types/types';
import ProjectCard from '../../elements/ProjectCard';

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
	mix-blend-mode: difference;
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
		{ x: '-110vw', y: '-10vh' },
		{ x: '110vw', y: '-10vh' },
		{ x: '-110vw', y: '10vh' },
		{ x: '110vw', y: '10vh' },
		{ x: '-110vw', y: '-10vh' },
		{ x: '110vw', y: '-15vh' },
		{ x: '-110vw', y: '-10vh' },
		{ x: '110vw', y: '-10vh' }
	];
	return directions[index % directions.length];
};

const getRandomEndPosition = (index: number) => {
	const endPositions = [
		{ x: '110vw', y: '-10vh' },
		{ x: '-110vw', y: '15vh' },
		{ x: '110vw', y: '-10vh' },
		{ x: '-110vw', y: '15vh' },
		{ x: '110vw', y: '10vh' },
		{ x: '-110vw', y: '-15vh' },
		{ x: '110vw', y: '10vh' },
		{ x: '-110vw', y: '15vh' }
	];
	return endPositions[index % endPositions.length];
};

const getIntermediatePoint = (
	from: { x: string; y: string },
	to: { x: string; y: string }
) => {
	const fromX = parseInt(from.x) || (from.x.includes('-') ? -100 : 100);
	const fromY = parseInt(from.y) || (from.y.includes('-') ? -15 : 15);
	const toX = parseInt(to.x) || (to.x.includes('-') ? -100 : 100);
	const toY = parseInt(to.y) || (to.y.includes('-') ? -15 : 15);

	const midX = ((fromX + toX) / 2) * 0.4 + 30; // Adjusted to be closer to the middle
	const midY = ((fromY + toY) / 2) * 0.4 + 15; // Adjusted to be closer to the middle

	return {
		x: `${midX}vw`,
		y: `${midY}vh`
	};
};

const getTransition = (index: number) => {
	const isSmallScreen = window.innerWidth < 768;
	const speeds = isSmallScreen
		? [15, 18, 20, 25, 22, 19, 17, 21, 23, 16]
		: [30, 36, 40, 50, 44, 38, 34, 42, 46, 32];

	const delays = isSmallScreen
		? [0, 8, 15, 25, 35, 45, 55, 65, 75, 85]
		: [0, 4, 8, 15, 20, 26, 33, 40, 56, 65];

	return {
		duration: speeds[index % speeds.length],
		delay: delays[index % delays.length],
		ease: 'linear',
		repeat: Infinity
	};
};

const Projects = (props: Props) => {
	const { data, animation, isHovered, setIsHovered } = props;

	const hasData = data && data.length > 0;

	const slideVariants: Variants = {
		animate: (i: number) => {
			const from = getRandomDirection(i);
			const to = getRandomEndPosition(i);
			const intermediate = getIntermediatePoint(from, to); // Calculate intermediate point

			return {
				x: [from.x, intermediate.x, to.x],
				y: [from.y, intermediate.y, to.y],
				transition: getTransition(i)
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
									slideCount={i + 1}
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
