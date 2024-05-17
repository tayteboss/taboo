import styled from 'styled-components';

type Props = {
	data: any;
};

const ProjectCardWrapper = styled.div`
	background: red;
	height: 100px;
	width: 100px;
`;

const ProjectCard = (props: Props) => {
	const { data } = props;

	return <ProjectCardWrapper>ProjectCard</ProjectCardWrapper>;
};

export default ProjectCard;
