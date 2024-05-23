import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { HomePageType } from '../../../shared/types/types';
import ProjectCard from '../../elements/ProjectCard';

type Props = {
	data: HomePageType['projects'];
	isActive: boolean;
};

const ProjectsWrapper = styled.div`
	height: 100vh;
	width: 100%;
	overflow: hidden;
	position: relative;
`;

const Slide = styled(motion.div)`
	position: absolute;
	z-index: 1;

	&:hover {
		z-index: 2;
	}
`;

const getRandomDirection = (index: number) => {
	const directions = [
		{ x: '100vw', y: '100vh' },
		{ x: '-100vw', y: '100vh' },
		{ x: '100vw', y: '-100vh' },
		{ x: '-100vw', y: '-100vh' },
		{ x: '50vw', y: '100vh' },
		{ x: '-50vw', y: '100vh' },
		{ x: '50vw', y: '-100vh' },
		{ x: '-50vw', y: '-100vh' },
		{ x: '100vw', y: '50vh' },
		{ x: '-100vw', y: '50vh' }
	];
	return directions[index % directions.length];
};

const getRandomEndPosition = (index: number) => {
	const endPositions = [
		{ x: '-100vw', y: '-100vh' },
		{ x: '100vw', y: '-100vh' },
		{ x: '-100vw', y: '100vh' },
		{ x: '100vw', y: '100vh' },
		{ x: '-50vw', y: '-100vh' },
		{ x: '50vw', y: '-100vh' },
		{ x: '-50vw', y: '100vh' },
		{ x: '50vw', y: '100vh' },
		{ x: '-100vw', y: '50vh' },
		{ x: '100vw', y: '50vh' }
	];
	return endPositions[index % endPositions.length];
};

// Function to calculate the intermediate point closer to the middle
const getIntermediatePoint = (
	from: { x: string; y: string },
	to: { x: string; y: string }
) => {
	const fromX = parseInt(from.x) || (from.x.includes('-') ? -100 : 100);
	const fromY = parseInt(from.y) || (from.y.includes('-') ? -100 : 100);
	const toX = parseInt(to.x) || (to.x.includes('-') ? -100 : 100);
	const toY = parseInt(to.y) || (to.y.includes('-') ? -100 : 100);

	// Calculate the intermediate point to be between 40 and 60vw/vh
	const midX = ((fromX + toX) / 2) * 0.4 + 20; // Adjusted to be closer to the middle
	const midY = ((fromY + toY) / 2) * 0.4 + 20; // Adjusted to be closer to the middle

	return {
		x: `${midX}vw`,
		y: `${midY}vh`
	};
};

const getTransition = (index: number) => {
	const speeds = [30, 36, 40, 50, 44, 38, 34, 42, 46, 32];
	const delays = [0, 3, 5, 7, 8, 8, 12, 15, 19, 24];
	return {
		duration: speeds[index % speeds.length],
		delay: delays[index % delays.length],
		ease: 'linear',
		repeat: Infinity
	};
};

const slideVariants: Variants = {
	animate: (i: number) => {
		const from = getRandomDirection(i);
		const to = getRandomEndPosition(i);
		const intermediate = getIntermediatePoint(from, to); // Calculate intermediate point

		console.log({ from, to, intermediate }); // Log for debugging

		return {
			// Use calculated intermediate point closer to the middle
			x: [from.x, intermediate.x, to.x],
			y: [from.y, intermediate.y, to.y],
			transition: getTransition(i)
		};
	}
};

const Projects = (props: Props) => {
	const { data } = props;

	const hasData = data && data.length > 0;

	return (
		<>
			{hasData && (
				<ProjectsWrapper>
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
						>
							<ProjectCard data={project} slideCount={i + 1} />
						</Slide>
					))}
				</ProjectsWrapper>
			)}
		</>
	);
};

export default Projects;
