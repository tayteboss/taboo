import styled from 'styled-components';
import LogoSvg from '../../svgs/LogoSvg';
import Tilt from 'react-parallax-tilt';
import { motion, useAnimation } from 'framer-motion';

type Props = {
	animation: ReturnType<typeof useAnimation>;
};

const LogoBlockWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	mix-blend-mode: difference;
	pointer-events: none;
	z-index: 100;

	svg {
		width: 75vw;
		height: auto;
	}
`;

const Inner = styled(motion.div)`
	position: relative;
	width: 100%;
	height: 100%;
`;

const LogoInner = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const LogoBlock = (props: Props) => {
	const { animation } = props;

	return (
		<LogoBlockWrapper>
			<Inner animate={animation}>
				<Tilt
					tiltMaxAngleX={5}
					tiltMaxAngleY={5}
					transitionSpeed={800}
					trackOnWindow
				>
					<LogoInner>
						<LogoSvg colour="var(--colour-white)" />
					</LogoInner>
				</Tilt>
			</Inner>
		</LogoBlockWrapper>
	);
};

export default LogoBlock;
