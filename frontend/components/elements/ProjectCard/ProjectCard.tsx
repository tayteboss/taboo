import styled from 'styled-components';
import MediaStack from '../../common/MediaStack';
import { ProjectType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: ProjectType;
	slideCount: number;
	isHovered: boolean;
	setIsHovered: (isHovered: boolean) => void;
};

const ProjectCardWrapper = styled.div<{
	$paddingTopRatio: string;
	$isHovered: boolean;
	$isSmall: boolean;
}>`
	position: relative;
	overflow: hidden;
	width: ${(props) => (props.$isSmall ? '20vw' : '30vw')};
	z-index: 1;
	transform: ${(props) => props.$isHovered && 'scale(0.98)'};
	filter: ${(props) => props.$isHovered && 'blur(2px) brightness(0.5)'};
	pointer-events: all;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		z-index: 2;
		transform: scale(1.02) !important;
		opacity: 1 !important;
		filter: blur(0px) brightness(1) !important;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: ${(props) => (props.$isSmall ? '50vw' : '80vw')};
	}

	.image-component-wrapper,
	.video-component-wrapper {
		padding-top: ${(props) => props.$paddingTopRatio};
		width: ${(props) => (props.$isSmall ? '20vw' : '30vw')};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: ${(props) => (props.$isSmall ? '50vw' : '80vw')};
		}
	}
`;

const ContentWrapper = styled.div`
	padding-top: ${pxToRem(16)};
`;

const Span = styled.span``;

const Divider = styled.span``;

const ProjectCard = (props: Props) => {
	const { data, slideCount, isHovered, setIsHovered } = props;

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

	return (
		<ProjectCardWrapper
			$paddingTopRatio={ratio}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			$isHovered={isHovered}
			$isSmall={
				data.thumbnailRatio === '16:9' || data.thumbnailRatio === '9:16'
			}
		>
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
