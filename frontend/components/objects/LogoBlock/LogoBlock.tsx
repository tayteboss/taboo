import styled from 'styled-components';
import LogoSvg from '../../svgs/LogoSvg';
import Tilt from 'react-parallax-tilt';

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

const LogoInner = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const LogoBlock = () => {
	return (
		<LogoBlockWrapper>
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
		</LogoBlockWrapper>
	);
};

export default LogoBlock;
