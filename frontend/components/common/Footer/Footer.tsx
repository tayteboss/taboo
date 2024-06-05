import styled from 'styled-components';
import { SiteSettingsType } from '../../../shared/types/types';
import formatHTML from '../../../utils/formatHTML';
import pxToRem from '../../../utils/pxToRem';
import Time from '../../elements/Time';
import HoverTyper from '../../elements/HoverTyper';

type Props = {
	phone: SiteSettingsType['phone'];
	email: SiteSettingsType['email'];
	instagramHandle: SiteSettingsType['instagramHandle'];
	instagramLink: SiteSettingsType['instagramLink'];
	address: SiteSettingsType['address'];
	googleMapsLink: SiteSettingsType['googleMapsLink'];
	aoc: SiteSettingsType['acknowledgementOfCountry'];
};

const FooterWrapper = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: ${pxToRem(32)};
	z-index: 1000;
	display: flex;
	flex-direction: column;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(20)} ${pxToRem(12)};
	}
`;

const TopBar = styled.div`
	display: flex;
	padding-bottom: ${pxToRem(12)};
	border-bottom: 1px solid var(--colour-white);
	margin-bottom: ${pxToRem(40)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-bottom: ${pxToRem(14)};
		margin-bottom: ${pxToRem(16)};
	}
`;

const DetailsWrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const LinkTag = styled.a``;

const AddressWrapper = styled.div`
	flex: 1;
`;

const Address = styled.div``;

const LinkWrapper = styled.a``;

const BottomBar = styled.div`
	display: flex;
	align-items: flex-start;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column-reverse;
		gap: ${pxToRem(12)};
	}
`;

const AocWrapper = styled.div`
	flex: 1;
`;

const Aoc = styled.p`
	width: calc(100% - 80px);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100%;
	}
`;

const CopyrightWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100%;
		justify-content: flex-start;
	}
`;

const Copyright = styled.p`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex: 1;
	}
`;

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

	return (
		<FooterWrapper>
			<TopBar>
				<AddressWrapper>
					{address && googleMapsLink && (
						<LinkWrapper href={googleMapsLink} target="_blank">
							<Address
								dangerouslySetInnerHTML={{
									__html: formatHTML(address)
								}}
							/>
						</LinkWrapper>
					)}
				</AddressWrapper>
				<DetailsWrapper>
					{instagramHandle && instagramLink && (
						<LinkTag href={instagramLink} target="_blank">
							<HoverTyper data={`@${instagramHandle}`} />
						</LinkTag>
					)}
					{phone && (
						<LinkTag href={`tel:${phone}`}>
							<HoverTyper data={phone} />
						</LinkTag>
					)}
					{email && (
						<LinkTag href={`mailto:${email}`}>
							<HoverTyper data={email} />
						</LinkTag>
					)}
				</DetailsWrapper>
			</TopBar>
			<BottomBar>
				<AocWrapper>
					{aoc && <Aoc className="type-small">{aoc}</Aoc>}
				</AocWrapper>
				<CopyrightWrapper>
					<Time />
					<Copyright>
						Copyright Taboo {new Date().getFullYear()}
					</Copyright>
				</CopyrightWrapper>
			</BottomBar>
		</FooterWrapper>
	);
};

export default Footer;
