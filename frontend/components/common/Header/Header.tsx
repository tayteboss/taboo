import styled from 'styled-components';
import { SiteSettingsType } from '../../../shared/types/types';

type Props = {
	tagline: SiteSettingsType['tagline'];
};

const HeaderWrapper = styled.header``;

const Header = (props: Props) => {
	const { tagline } = props;

	return <HeaderWrapper className="header">Header</HeaderWrapper>;
};

export default Header;
