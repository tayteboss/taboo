import styled from 'styled-components';
import { SiteSettingsType } from '../../../shared/types/types';
import Marquee from 'react-fast-marquee';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	tagline: SiteSettingsType['tagline'];
};

const TaglineWrapper = styled.div`
	width: calc(50vw - 32px);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100%;
	}
`;

const Title = styled.p`
	margin-right: ${pxToRem(8)};
`;

const Tagline = (props: Props) => {
	const { tagline } = props;

	return (
		<>
			{tagline && (
				<TaglineWrapper>
					<Marquee autoFill>
						<Title>{tagline}</Title>
					</Marquee>
				</TaglineWrapper>
			)}
		</>
	);
};

export default Tagline;
