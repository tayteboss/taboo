import styled from 'styled-components';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { ReactNode, useState } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { SiteSettingsType } from '../../shared/types/types';
import Stage from '../objects/Stage';

const siteSettings: SiteSettingsType = require('../../json/siteSettings.json');

const {
	tagline,
	phone,
	email,
	instagramHandle,
	instagramLink,
	address,
	googleMapsLink,
	acknowledgementOfCountry
} = siteSettings;

const Main = styled.main``;

type Props = {
	children: ReactNode;
	layoutIsActive: boolean;
};

const Layout = (props: Props) => {
	const { children, layoutIsActive } = props;

	const lenis = useLenis(({ scroll }) => {});

	return (
		<>
			<Header tagline={tagline} isActive={layoutIsActive} />
			<ReactLenis root>
				<Main>{children}</Main>
			</ReactLenis>
			<Footer
				isActive={layoutIsActive}
				phone={phone}
				email={email}
				instagramHandle={instagramHandle}
				instagramLink={instagramLink}
				address={address}
				googleMapsLink={googleMapsLink}
				aoc={acknowledgementOfCountry}
			/>
		</>
	);
};

export default Layout;
