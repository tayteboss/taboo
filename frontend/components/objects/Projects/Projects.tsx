import styled from 'styled-components';
import { HomePageType } from '../../../shared/types/types';
import ProjectCard from '../../elements/ProjectCard';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'; // import from 'keen-slider/react.es' for to get an ES module
import LogoSvg from '../../svgs/LogoSvg';

type Props = {
	data: HomePageType['projects'];
	isActive: boolean;
};

const ProjectsWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

const LogoWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
	mix-blend-mode: difference;

	svg {
		width: 75vw;
		height: auto;
	}
`;

const Slide = styled.div``;

const Projects = (props: Props) => {
	const { data, isActive } = props;

	const hasData = data && data.length > 0;

	const [sliderRef, instanceRef] = useKeenSlider(
		{
			slideChanged() {
				console.log('slide changed');
			}
		},
		[
			// add plugins here
		]
	);

	return (
		<>
			{hasData && (
				<ProjectsWrapper ref={sliderRef} className="keen-slider">
					{data.map((project, i) => (
						<Slide className="keen-slider__slide">
							<ProjectCard key={i} data={project} />
						</Slide>
					))}
					<LogoWrapper>
						<LogoSvg colour="var(--colour-white)" />
					</LogoWrapper>
				</ProjectsWrapper>
			)}
		</>
	);
};

export default Projects;
