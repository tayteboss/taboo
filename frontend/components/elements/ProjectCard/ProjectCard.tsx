import styled from 'styled-components';
import MediaStack from '../../common/MediaStack';
import { ProjectType } from '../../../shared/types/types';
import ContentTyper from '../ContentTyper';
import { useState } from 'react';

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
	width: ${(props) => (props.$isSmall ? '25vw' : '35vw')};
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

		img {
			transform: scale(1.15);
		}
	}

	img {
		transition: all 3000ms var(--transition-ease);
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: ${(props) => (props.$isSmall ? '30vw' : '60vw')};
	}

	.image-component-wrapper,
	.video-component-wrapper {
		padding-top: ${(props) => props.$paddingTopRatio};
		width: ${(props) => (props.$isSmall ? '30vw' : '60vw')};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: ${(props) => (props.$isSmall ? '70vw' : '80vw')};
		}
	}
`;

const ProjectCard = (props: Props) => {
	const { data, slideCount, isHovered, setIsHovered } = props;

	const [cardHovered, setCardHovered] = useState(false);

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
			onMouseOver={() => {
				setIsHovered(true);
				setCardHovered(true);
			}}
			onMouseOut={() => {
				setIsHovered(false);
				setCardHovered(false);
			}}
			$isHovered={isHovered}
			$isSmall={
				data.thumbnailRatio === '16:9' || data.thumbnailRatio === '9:16'
			}
		>
			<MediaStack data={data?.thumbnailMedia} />
			<ContentTyper
				data={`${data?.title} | ${data?.tag}`}
				isActive={cardHovered}
			/>
		</ProjectCardWrapper>
	);
};

export default ProjectCard;
