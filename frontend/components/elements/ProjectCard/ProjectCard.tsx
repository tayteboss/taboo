import styled from 'styled-components';
import MediaStack from '../../common/MediaStack';
import { ProjectType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: ProjectType;
	slideCount: number;
};

const ProjectCardWrapper = styled.div<{ $paddingTopRatio: string }>`
	position: relative;
	overflow: hidden;
	width: 30vw;
	z-index: 1;

	&:hover {
		z-index: 2;
	}

	.image-component-wrapper,
	.video-component-wrapper {
		padding-top: ${(props) => props.$paddingTopRatio};
		width: 30vw;
	}
`;

const ContentWrapper = styled.div`
	padding-top: ${pxToRem(16)};
`;

const Span = styled.span``;

const Divider = styled.span``;

const ProjectCard = (props: Props) => {
	const { data, slideCount } = props;

	let ratio = '56.25%';

	switch (data.thumbnailRatio) {
		case '1:1':
			ratio = '100%';
			break;
		case '16:9':
			ratio = '56.25%';
			break;
		case '9:16':
			ratio = '177.77%';
			break;
		case '4:5':
			ratio = '125%';
			break;
		case '3:2':
			ratio = '66.66%';
			break;
	}

	console.log('data', data);

	return (
		<ProjectCardWrapper $paddingTopRatio={ratio}>
			<MediaStack data={data?.thumbnailMedia} />
			<ContentWrapper>
				{data?.title && (
					<Span>
						{slideCount} {data?.title}
					</Span>
				)}
				<Divider> | </Divider>
				{data?.tag && <Span>{data?.tag}</Span>}
			</ContentWrapper>
		</ProjectCardWrapper>
	);
};

export default ProjectCard;
