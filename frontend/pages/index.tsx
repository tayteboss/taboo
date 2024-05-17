import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { HomePageType, TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import client from '../client';
import { homePageQueryString } from '../lib/sanityQueries';
import Projects from '../components/objects/Projects';
import IntroSequence from '../components/objects/IntroSequence';
import { useState } from 'react';

const PageWrapper = styled(motion.div)`
	height: 100dvh;
`;

type Props = {
	data: HomePageType;
	pageTransitionVariants: TransitionsType;
	hasVisited: boolean;
};

const Page = (props: Props) => {
	const { data, pageTransitionVariants, hasVisited } = props;

	const [sequenceActive, setSequenceActive] = useState(!hasVisited);

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
			<IntroSequence
				isActive={sequenceActive}
				setSequenceActive={setSequenceActive}
			/>
			<Projects data={data?.projects} isActive={!sequenceActive} />
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
