import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { HomePageType, TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import client from '../client';
import { homePageQueryString } from '../lib/sanityQueries';
import Projects from '../components/objects/Projects';
import LogoBlock from '../components/objects/LogoBlock';

const PageWrapper = styled(motion.div)`
	height: 100dvh;
	overflow: hidden;
`;

type Props = {
	data: HomePageType;
	pageTransitionVariants: TransitionsType;
	hasVisited: boolean;
	setLayoutIsActive: (isActive: boolean) => void;
};

const Page = (props: Props) => {
	const { data, pageTransitionVariants } = props;

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo
				title={data?.seoTitle || ''}
				description={data?.seoDescription || ''}
			/>
			<Projects data={data?.projects} />
			<LogoBlock />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await client.fetch(homePageQueryString);

	return {
		props: {
			data
		}
	};
}

export default Page;
