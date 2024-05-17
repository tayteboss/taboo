import styled from 'styled-components';

type Props = {
	isActive: boolean;
	setSequenceActive: (value: boolean) => void;
};

const IntroSequenceWrapper = styled.div``;

const IntroSequence = (props: Props) => {
	const { isActive, setSequenceActive } = props;

	return <IntroSequenceWrapper>IntroSequence</IntroSequenceWrapper>;
};

export default IntroSequence;
