import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { motion } from 'framer-motion';

const SiteStatusWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${pxToRem(16)};
`;

const Indicator = styled(motion.div)`
	height: ${pxToRem(16)};
	width: ${pxToRem(16)};
	background: var(--colour-white);
	border-radius: 50%;
`;

const Title = styled.h1``;

const SiteStatus = () => {
	return (
		<SiteStatusWrapper>
			<Indicator
				initial={{ opacity: 0, scale: 0.98 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 1,
					repeat: Infinity,
					repeatType: 'mirror',
					ease: 'easeInOut'
				}}
			/>
			<Title>Site Under Construction</Title>
		</SiteStatusWrapper>
	);
};

export default SiteStatus;
