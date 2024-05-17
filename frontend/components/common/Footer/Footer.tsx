import styled from 'styled-components';
import { SiteSettingsType } from '../../../shared/types/types';

type Props = {
	phone: SiteSettingsType['phone'];
	email: SiteSettingsType['email'];
	instagramHandle: SiteSettingsType['instagramHandle'];
	instagramLink: SiteSettingsType['instagramLink'];
	address: SiteSettingsType['address'];
	googleMapsLink: SiteSettingsType['googleMapsLink'];
	aoc: SiteSettingsType['acknowledgementOfCountry'];
};

const FooterWrapper = styled.footer``;

const Footer = (props: Props) => {
	const {
		phone,
		email,
		instagramHandle,
		instagramLink,
		address,
		googleMapsLink,
		aoc
	} = props;

	return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;
