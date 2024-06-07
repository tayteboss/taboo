import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ImageComponent from './ImageComponent';
import VideoComponent from './VideoComponent';
import { MediaType } from '../../../shared/types/types';
import { motion, useAnimation } from 'framer-motion';

const MediaStackWrapper = styled.div`
	overflow: hidden;
`;

type Props = {
	data: MediaType;
	isPriority?: boolean;
};

const MediaStack = (props: Props) => {
	const { data, isPriority = false } = props ?? {};

	const useVideo = data?.mediaType === 'video';

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%'
	});

	const animation = useAnimation();

	const handleMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		const moveX = clientX - window.innerWidth / 2;
		const moveY = clientY - window.innerHeight / 2;
		const projectsOffsetFactor = 50;
		animation.start({
			x: moveX / projectsOffsetFactor,
			y: moveY / projectsOffsetFactor
		});
	};

	return (
		<MediaStackWrapper ref={ref} onMouseMove={(e) => handleMouseMove(e)}>
			<motion.div animate={animation}>
				{useVideo && (
					<VideoComponent
						data={data}
						inView={inView}
						isPriority={isPriority}
					/>
				)}
				{!useVideo && (
					<ImageComponent
						data={data}
						isPriority={isPriority}
						inView={inView}
					/>
				)}
			</motion.div>
		</MediaStackWrapper>
	);
};

export default MediaStack;
