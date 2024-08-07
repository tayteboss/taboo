import styled from 'styled-components';
import LogoSvg from '../../svgs/LogoSvg';
import Tilt from 'react-parallax-tilt';
import { motion, useAnimation } from 'framer-motion';

type Props = {
	animation: ReturnType<typeof useAnimation>;
	isHovered: boolean;
};

const LogoBlockWrapper = styled.div<{ $isHovered: boolean }>`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	mix-blend-mode: difference;
	pointer-events: none;
	z-index: ${(props) => (props.$isHovered ? 1 : 100)};

	svg {
		width: 75vw;
		height: auto;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: 90vw;
			transform: translateX(-7px);
		}
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
	const { animation, isHovered } = props;

	return (
		<LogoBlockWrapper $isHovered={isHovered}>
			<Inner animate={animation}>
				<Tilt
					tiltMaxAngleX={5}
					tiltMaxAngleY={5}
					transitionSpeed={800}
					trackOnWindow
				>
					<LogoInner>
						{/* <LogoSvg colour="var(--colour-white)" /> */}
						{/* <svg
							width="1549"
							height="353"
							viewBox="0 0 1549 353"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_28_3)">
								<path
									d="M652.39 57.272V39.6549H645.339V57.272H639.171V63.2745H658.617V57.272H652.39Z"
									fill="var(--colour-white)"
								/>
								<path
									d="M648.891 77.7943C635.192 77.7943 624.042 66.5967 624.042 52.8379C624.042 39.0791 635.192 27.8815 648.891 27.8815C662.59 27.8815 673.739 39.0791 673.739 52.8379C673.739 66.5967 662.59 77.7943 648.891 77.7943ZM648.891 34.9231C639.059 34.9231 631.06 42.9573 631.06 52.8313C631.06 62.7053 639.059 70.7395 648.891 70.7395C658.722 70.7395 666.721 62.7053 666.721 52.8313C666.721 42.9573 658.722 34.9231 648.891 34.9231Z"
									fill="var(--colour-white)"
								/>
								<motion.path
									d="M1508.71 142.09C1475.85 49.89 1342.69 17.67 1267.09 87.02C1205.76 139.5 1216.73 235.9 1277.35 284.05C1315.44 315.99 1370.48 326.7 1418.67 310.71C1487.48 289.5 1535.6 213.35 1508.94 142.73L1508.7 142.08L1508.71 142.09Z"
									stroke="var(--colour-white)"
									strokeWidth="65"
									strokeMiterlimit="10"
									strokeLinecap="round"
									initial={{ pathLength: 1 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 4,
										ease: 'easeInOut'
									}}
								/>
								<motion.path
									d="M1219.36 205.06C1198.26 145.85 1112.74 125.16 1064.2 169.7C1024.82 203.4 1031.86 265.31 1070.79 296.23C1095.25 316.74 1130.59 323.62 1161.54 313.35C1205.73 299.73 1236.63 250.83 1219.51 205.48L1219.36 205.06Z"
									stroke="var(--colour-white)"
									strokeWidth="65"
									strokeMiterlimit="10"
									initial={{ pathLength: 0.5 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 4,
										ease: 'easeInOut'
									}}
								/>
								<motion.path
									d="M19.03 105.2C103.77 166.4 215.86 208.61 320.99 183.85C363.76 173.78 403.06 152.89 443.75 136.29C494.71 115.5 553.56 100.7 605.45 126.76C645.46 146.86 670.56 189.04 657.13 233.78C640.54 289.09 595.78 320.85 537.62 317.86C504.13 316.14 452.56 292.75 462.91 250.68C465.95 238.31 475.27 228.22 486.12 221.53C526.6 196.57 579.02 202.13 621.72 217.65C664.89 233.35 705.5 263.19 746.66 283.59C797.99 309.03 855.12 327.34 910.78 316.61C959.24 307.27 1023.7 268.05 1016.88 209.21C1012.25 169.23 970.29 145.48 936.12 133.73C890.47 118.04 830.26 115.29 786.46 131.58C760.44 141.04 743.25 156.07 739.89 170.44C736.28 184.68 746.17 198.04 766.45 204.89C798.99 216.44 849.58 207.16 881.91 188.8C974.45 137.67 957.37 35.14 849.27 32.56C787.9 31.2 726.86 58.12 674.81 108.71"
									stroke="var(--colour-white)"
									strokeWidth="65"
									strokeMiterlimit="10"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 4,
										ease: 'easeInOut'
									}}
								/>
								<motion.path
									d="M406.03 276.63C368.04 297.02 329.43 317.58 287.07 318.01C244.9 319.24 198.16 293.25 192.64 246.83C185.56 172.34 249.29 98.78 287.03 35.4"
									stroke="var(--colour-white)"
									strokeWidth="65"
									strokeMiterlimit="10"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 4,
										ease: 'easeInOut'
									}}
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
						</svg> */}

						<svg
							width="1549"
							height="353"
							viewBox="0 0 1549 353"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_1549_353)">
								<motion.path
									d="M1508.71 142.09C1475.85 49.89 1342.69 17.67 1267.09 87.02C1205.76 139.5 1216.73 235.9 1277.35 284.05C1315.44 315.99 1370.48 326.7 1418.67 310.71C1487.48 289.5 1535.6 213.35 1508.94 142.73L1508.7 142.08L1508.71 142.09Z"
									stroke="var(--colour-white)"
									strokeWidth="65"
									strokeMiterlimit="0.1"
									strokeLinecap="round"
									strokeLinejoin="miter"
									initial={{ pathLength: 1 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 4,
										ease: 'easeInOut'
									}}
								/>
								<motion.path
									d="M1219.36 205.06C1198.26 145.85 1112.74 125.16 1064.2 169.7C1024.82 203.4 1031.86 265.31 1070.79 296.23C1095.25 316.74 1130.59 323.62 1161.54 313.35C1205.73 299.73 1236.63 250.83 1219.51 205.48L1219.36 205.06Z"
									stroke="var(--colour-white)"
									strokeWidth="65"
									strokeMiterlimit="10"
									initial={{ pathLength: 0.8 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 4,
										ease: 'easeInOut'
									}}
								/>
								<motion.path
									d="M19.03 105.2C103.77 166.4 215.86 208.61 320.99 183.85C363.76 173.78 403.06 152.89 443.75 136.29C494.71 115.5 553.56 100.7 605.45 126.76C645.46 146.86 670.56 189.04 657.13 233.78C640.54 289.09 595.78 320.85 537.62 317.86C504.13 316.14 452.56 292.75 462.91 250.68C465.95 238.31 475.27 228.22 486.12 221.53C526.6 196.57 579.02 202.13 621.72 217.65C664.89 233.35 705.5 263.19 746.66 283.59C797.99 309.03 855.12 327.34 910.78 316.61C959.24 307.27 1023.7 268.05 1016.88 209.21C1012.25 169.23 970.29 145.48 936.12 133.73C890.47 118.04 830.26 115.29 786.46 131.58C760.44 141.04 743.25 156.07 739.89 170.44C736.28 184.68 746.17 198.04 766.45 204.89C798.99 216.44 849.58 207.16 881.91 188.8C974.45 137.67 957.37 35.14 849.27 32.56C787.9 31.2 726.86 58.12 674.81 108.71"
									stroke="var(--colour-white)"
									strokeWidth="65"
									strokeMiterlimit="10"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 4,
										ease: 'easeInOut'
									}}
								/>
								<motion.path
									d="M406.03 276.63C368.04 297.02 329.43 317.58 287.07 318.01C244.9 319.24 198.16 293.25 192.64 246.83C185.56 172.34 249.29 98.78 287.03 35.4"
									stroke="var(--colour-white)"
									strokeWidth="65"
									strokeMiterlimit="10"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 4,
										ease: 'easeInOut'
									}}
								/>
								<motion.path
									d="M1034.01 90.7401V62.9401H1022.83V90.7401H1013.06V100.21H1043.87V90.7401H1034.01Z"
									fill="white"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.3,
										delay: 4,
										ease: 'easeInOut'
									}}
								/>
								<motion.path
									d="M1028.47 123.12C1006.76 123.12 989.09 105.45 989.09 83.74C989.09 62.03 1006.76 44.36 1028.47 44.36C1050.18 44.36 1067.85 62.03 1067.85 83.74C1067.85 105.45 1050.18 123.12 1028.47 123.12ZM1028.47 55.48C1012.89 55.48 1000.21 68.16 1000.21 83.74C1000.21 99.32 1012.89 112 1028.47 112C1044.05 112 1056.73 99.32 1056.73 83.74C1056.73 68.16 1044.05 55.48 1028.47 55.48Z"
									fill="white"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.3,
										delay: 4,
										ease: 'easeInOut'
									}}
								/>
							</g>
							<defs>
								<clipPath id="clip0_2752_234">
									<rect
										width="1548.91"
										height="352.24"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
					</LogoInner>
				</Tilt>
			</Inner>
		</LogoBlockWrapper>
	);
};

export default LogoBlock;
