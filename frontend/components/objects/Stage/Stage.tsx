import { motion } from 'framer-motion';
import styled from 'styled-components';

type Props = {
	isActive: boolean;
};

const StageWrapper = styled(motion.div)`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background: var(--colour-black);
	z-index: 10;
`;

const wrapperVariants = {
	hidden: {
		height: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		height: '100vh',
		transition: {
			duration: 0.7,
			ease: 'easeInOut'
		}
	}
};

const Stage = (props: Props) => {
	const { isActive } = props;

	return (
		<StageWrapper
			variants={wrapperVariants}
			initial="hidden"
			animate={isActive ? 'visible' : 'hidden'}
		/>
	);
};

export default Stage;
