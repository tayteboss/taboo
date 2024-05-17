import styled from 'styled-components';
import { HomePageType } from '../../../shared/types/types';

type Props = {
	data: HomePageType['projects'];
	isActive: boolean;
};

const ProjectsWrapper = styled.div``;

const Projects = (props: Props) => {
	const { data, isActive } = props;

	return <ProjectsWrapper>Projects</ProjectsWrapper>;
};

export default Projects;
