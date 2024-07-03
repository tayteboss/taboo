import styled from 'styled-components';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { ReactNode, useState } from 'react';
import { SiteSettingsType } from '../../shared/types/types';
import IntroSequence from '../objects/IntroSequence';
import Cursor from '../elements/Cursor';

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
	hasVisited: boolean;
};

const Layout = (props: Props) => {
	const { children, hasVisited } = props;

	const [appCursorRefresh, setAppCursorRefresh] = useState(0);

	return (
		<>
			<Header tagline={tagline} />
			<Main>{children}</Main>
			<Footer
				phone={phone}
				email={email}
				instagramHandle={instagramHandle}
				instagramLink={instagramLink}
				address={address}
				googleMapsLink={googleMapsLink}
				aoc={acknowledgementOfCountry}
			/>
			<IntroSequence hasVisited={hasVisited} />
			<Cursor
				cursorRefresh={() => setAppCursorRefresh(appCursorRefresh + 1)}
			/>
		</>
	);
};

export default Layout;
