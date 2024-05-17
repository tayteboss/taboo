import styled from 'styled-components';
import { SiteSettingsType } from '../../../shared/types/types';

type Props = {
	tagline: SiteSettingsType['tagline'];
};

const TaglineWrapper = styled.div``;

const Tagline = (props: Props) => {
	const { tagline } = props;

	return <TaglineWrapper>Tagline</TaglineWrapper>;
};

export default Tagline;
