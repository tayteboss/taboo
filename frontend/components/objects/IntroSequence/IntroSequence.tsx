import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

type Props = {
	isActive: boolean;
	setSequenceActive: (value: boolean) => void;
};

const IntroSequenceWrapper = styled(motion.section)`
	background: var(--colour-white);
	height: 100vh;
	width: 100%;
	position: relative;

	svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(1.3);
		width: 100%;
		height: auto;
	}
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

const IntroSequence = (props: Props) => {
	const { isActive, setSequenceActive } = props;

	return (
		<AnimatePresence>
			{isActive && (
				<IntroSequenceWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<svg
						width="2460"
						height="1577"
						viewBox="0 0 2460 1577"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<motion.path
							d="M132 788.825C237.928 788.825 321.119 845.399 412.127 896.453C492.041 941.283 552.012 1008.81 626.277 1060.47C708.146 1117.43 800.319 1159.97 885.395 1211.96C986.07 1273.49 1100.45 1302.08 1210.12 1342.81C1355.12 1396.67 1497.97 1427.15 1651.32 1440.49C1797.63 1453.21 1921.74 1437.02 2056.4 1379.3C2192.28 1321.07 2304.98 1254.81 2319.94 1094.02C2329.24 994.013 2340.86 854.512 2288.61 766.341C2267.53 730.772 2228.41 723.757 2192.04 709.21C2144.13 690.044 2090.27 669.523 2039.45 660.188C1974.84 648.321 1903.98 647.102 1838.2 643.232C1809.6 641.55 1770.57 636.673 1744.21 649.498C1702.51 669.785 1667.24 702.2 1629.94 729.114C1562 778.143 1482.18 811.43 1402.16 835.267C1327.76 857.426 1254.72 855.171 1177.69 855.171C1063.92 855.171 929.812 845.977 843.376 760.812C801.609 719.659 808.059 661.061 808.729 607.479C809.299 561.853 836.824 543.884 878.761 533.762C909.64 526.308 942.277 530.357 972.751 519.387C1019.16 502.681 1065.65 483.377 1110.23 462.255C1190.11 424.421 1278.26 412.905 1356.45 366.791C1442.26 316.188 1507.68 220.241 1551.8 132"
							stroke="var(--colour-black)"
							stroke-width="263"
							stroke-linecap="round"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{
								duration: 2,
								ease: 'easeInOut'
							}}
							onAnimationComplete={() => setSequenceActive(false)}
						/>
					</svg>
				</IntroSequenceWrapper>
			)}
		</AnimatePresence>
	);
};

export default IntroSequence;
