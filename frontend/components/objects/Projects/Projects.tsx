import styled from 'styled-components';
import { HomePageType } from '../../../shared/types/types';
import ProjectCard from '../../elements/ProjectCard';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'; // import from 'keen-slider/react.es' for to get an ES module

type Props = {
	data: HomePageType['projects'];
	isActive: boolean;
};

const ProjectsWrapper = styled.div`
	height: 100%;
	width: 100%;
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
						<Slide className="keen-slider__slide" key={i}>
							<ProjectCard data={project} />
						</Slide>
					))}
				</ProjectsWrapper>
			)}
		</>
	);
};

export default Projects;
