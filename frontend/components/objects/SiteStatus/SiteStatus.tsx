import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { motion } from 'framer-motion';

const SiteStatusWrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: ${pxToRem(16)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		border-bottom: 1px solid var(--colour-white);
		padding-bottom: ${pxToRem(12)};
		margin-bottom: ${pxToRem(12)};
		width: 100%;
		gap: ${pxToRem(8)};
	}
`;

const Indicator = styled(motion.div)`
	height: ${pxToRem(16)};
	width: ${pxToRem(16)};
	background: #eea5a3;
	border-radius: 50%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: ${pxToRem(14)};
		height: ${pxToRem(14)};
	}
`;

const Title = styled.h1``;

const SiteStatus = () => {
	return (
		<SiteStatusWrapper
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 1,
				delay: 4
			}}
		>
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
