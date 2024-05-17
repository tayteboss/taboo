import styled from 'styled-components';
import { SiteSettingsType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import Tagline from '../../objects/Tagline';
import SiteStatus from '../../objects/SiteStatus';

type Props = {
	tagline: SiteSettingsType['tagline'];
};

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: ${pxToRem(32)};
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
`;

const Header = (props: Props) => {
	const { tagline } = props;

	return (
		<HeaderWrapper className="header">
			<SiteStatus />
			<Tagline tagline={tagline} />
		</HeaderWrapper>
	);
};

export default Header;
