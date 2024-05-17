import styled from 'styled-components';
import { SiteSettingsType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import Tagline from '../../objects/Tagline';
import SiteStatus from '../../objects/SiteStatus';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	tagline: SiteSettingsType['tagline'];
	isActive: boolean;
};

const HeaderWrapper = styled(motion.header)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: ${pxToRem(32)};
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(20)} ${pxToRem(12)};
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: 0.3,
			ease: 'easeInOut'
		}
	}
};

const Header = (props: Props) => {
	const { tagline, isActive } = props;

	return (
		<AnimatePresence>
			{isActive && (
				<HeaderWrapper
					className="header"
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<SiteStatus />
					<Tagline tagline={tagline} />
				</HeaderWrapper>
			)}
		</AnimatePresence>
	);
};

export default Header;
