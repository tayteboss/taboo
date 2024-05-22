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
	height: 100%;
	width: 100%;
	position: absolute;
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

const getTransition = (index: number) => {
	const speeds = [15, 18, 20, 25, 22, 19, 17, 21, 23, 16];
	const delays = [0, 0.5, 1, 1.5, 0.25, 0.75, 1.25, 1.75, 0.1, 0.9];
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
		return {
			x: [from.x, '0vw', to.x],
			y: [from.y, '0vh', to.y],
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
