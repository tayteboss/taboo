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
		transform: translate(-50%, -70%) scale(4.9);
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
						width="1549"
						height="353"
						viewBox="0 0 1549 353"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_28_3)">
							<motion.path
								d="M1508.71 142.09C1475.85 49.89 1342.69 17.67 1267.09 87.02C1205.76 139.5 1216.73 235.9 1277.35 284.05C1315.44 315.99 1370.48 326.7 1418.67 310.71C1487.48 289.5 1535.6 213.35 1508.94 142.73L1508.7 142.08L1508.71 142.09Z"
								stroke="var(--colour-black)"
								stroke-width="65"
								stroke-miterlimit="10"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{
									duration: 4,
									ease: 'easeInOut'
								}}
								onAnimationComplete={() =>
									setSequenceActive(false)
								}
							/>
							<motion.path
								d="M1219.36 205.06C1198.26 145.85 1112.74 125.16 1064.2 169.7C1024.82 203.4 1031.86 265.31 1070.79 296.23C1095.25 316.74 1130.59 323.62 1161.54 313.35C1205.73 299.73 1236.63 250.83 1219.51 205.48L1219.36 205.06Z"
								stroke="var(--colour-black)"
								stroke-width="65"
								stroke-miterlimit="10"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{
									duration: 4,
									ease: 'easeInOut'
								}}
								onAnimationComplete={() =>
									setSequenceActive(false)
								}
							/>
							<motion.path
								d="M19.03 105.2C103.77 166.4 215.86 208.61 320.99 183.85C363.76 173.78 403.06 152.89 443.75 136.29C494.71 115.5 553.56 100.7 605.45 126.76C645.46 146.86 670.56 189.04 657.13 233.78C640.54 289.09 595.78 320.85 537.62 317.86C504.13 316.14 452.56 292.75 462.91 250.68C465.95 238.31 475.27 228.22 486.12 221.53C526.6 196.57 579.02 202.13 621.72 217.65C664.89 233.35 705.5 263.19 746.66 283.59C797.99 309.03 855.12 327.34 910.78 316.61C959.24 307.27 1023.7 268.05 1016.88 209.21C1012.25 169.23 970.29 145.48 936.12 133.73C890.47 118.04 830.26 115.29 786.46 131.58C760.44 141.04 743.25 156.07 739.89 170.44C736.28 184.68 746.17 198.04 766.45 204.89C798.99 216.44 849.58 207.16 881.91 188.8C974.45 137.67 957.37 35.14 849.27 32.56C787.9 31.2 726.86 58.12 674.81 108.71"
								stroke="var(--colour-black)"
								stroke-width="65"
								stroke-miterlimit="10"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{
									duration: 4,
									ease: 'easeInOut'
								}}
								onAnimationComplete={() =>
									setSequenceActive(false)
								}
							/>
							<motion.path
								d="M406.03 276.63C368.04 297.02 329.43 317.58 287.07 318.01C244.9 319.24 198.16 293.25 192.64 246.83C185.56 172.34 249.29 98.78 287.03 35.4"
								stroke="var(--colour-black)"
								stroke-width="65"
								stroke-miterlimit="10"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{
									duration: 4,
									ease: 'easeInOut'
								}}
								onAnimationComplete={() =>
									setSequenceActive(false)
								}
							/>
						</g>
						<defs>
							<clipPath id="clip0_28_3">
								<rect
									width="1548.91"
									height="352.24"
									fill="white"
								/>
							</clipPath>
						</defs>
					</svg>

					{/* <svg
						width="2460"
						height="1577"
						viewBox="0 0 2460 1577"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<motion.path
							d="M132 788.825C237.928 788.825 321.119 845.399 412.127 896.453C492.041 941.283 552.012 1008.81 626.277 1060.47C708.146 1117.43 800.319 1159.97 885.395 1211.96C986.07 1273.49 1100.45 1302.08 1210.12 1342.81C1355.12 1396.67 1497.97 1427.15 1651.32 1440.49C1797.63 1453.21 1921.74 1437.02 2056.4 1379.3C2192.28 1321.07 2304.98 1254.81 2319.94 1094.02C2329.24 994.013 2340.86 854.512 2288.61 766.341C2267.53 730.772 2228.41 723.757 2192.04 709.21C2144.13 690.044 2090.27 669.523 2039.45 660.188C1974.84 648.321 1903.98 647.102 1838.2 643.232C1809.6 641.55 1770.57 636.673 1744.21 649.498C1702.51 669.785 1667.24 702.2 1629.94 729.114C1562 778.143 1482.18 811.43 1402.16 835.267C1327.76 857.426 1254.72 855.171 1177.69 855.171C1063.92 855.171 929.812 845.977 843.376 760.812C801.609 719.659 808.059 661.061 808.729 607.479C809.299 561.853 836.824 543.884 878.761 533.762C909.64 526.308 942.277 530.357 972.751 519.387C1019.16 502.681 1065.65 483.377 1110.23 462.255C1190.11 424.421 1278.26 412.905 1356.45 366.791C1442.26 316.188 1507.68 220.241 1551.8 132"
							stroke="var(--colour-black)"
							strokeWidth="263"
							strokeLinecap="round"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{
								duration: 2,
								ease: 'easeInOut'
							}}
							onAnimationComplete={() => setSequenceActive(false)}
						/>
					</svg> */}
				</IntroSequenceWrapper>
			)}
		</AnimatePresence>
	);
};

export default IntroSequence;
