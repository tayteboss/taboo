import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
	hasVisited: boolean;
};

const IntroSequenceWrapper = styled(motion.section)`
	position: fixed;
	top: 0;
	left: 0;
	background: var(--colour-white);
	height: 100vh;
	width: 100%;
	z-index: 500;

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
	const { hasVisited } = props;

	const [sequenceActive, setSequenceActive] = useState(true);

	return (
		<AnimatePresence>
			{sequenceActive && (
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
						<g clipPath="url(#clip0_28_3)">
							<motion.path
								d="M1508.71 142.09C1475.85 49.89 1342.69 17.67 1267.09 87.02C1205.76 139.5 1216.73 235.9 1277.35 284.05C1315.44 315.99 1370.48 326.7 1418.67 310.71C1487.48 289.5 1535.6 213.35 1508.94 142.73L1508.7 142.08L1508.71 142.09Z"
								stroke="var(--colour-black)"
								stroke-Width="65"
								strokeMiterlimit="10"
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
								stroke-Width="65"
								strokeMiterlimit="10"
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
								stroke-Width="65"
								strokeMiterlimit="10"
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
								stroke-Width="65"
								strokeMiterlimit="10"
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
				</IntroSequenceWrapper>
			)}
		</AnimatePresence>
	);
};

export default IntroSequence;
