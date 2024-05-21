import styled from 'styled-components';
import LogoSvg from '../../svgs/LogoSvg';
import Tilt from 'react-parallax-tilt';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	isActive: boolean;
};

const LogoBlockWrapper = styled(motion.div)`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	mix-blend-mode: difference;

	svg {
		width: 75vw;
		height: auto;
	}
`;

const LogoInner = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const LogoBlock = (props: Props) => {
	const { isActive } = props;

	return (
		<AnimatePresence>
			{isActive && (
				<LogoBlockWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<Tilt
						tiltMaxAngleX={3}
						tiltMaxAngleY={3}
						transitionSpeed={800}
						trackOnWindow
					>
						<LogoInner>
							<LogoSvg colour="var(--colour-white)" />
						</LogoInner>
					</Tilt>
				</LogoBlockWrapper>
			)}
		</AnimatePresence>
	);
};

export default LogoBlock;
