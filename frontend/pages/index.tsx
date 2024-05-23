import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { HomePageType, TransitionsType } from '../shared/types/types';
import { motion, useAnimation } from 'framer-motion';
import client from '../client';
import { homePageQueryString } from '../lib/sanityQueries';
import Projects from '../components/objects/Projects';
import LogoBlock from '../components/objects/LogoBlock';

const PageWrapper = styled(motion.div)`
	height: 100dvh;
	overflow: hidden;
`;

const Inner = styled(motion.div)``;

type Props = {
	data: HomePageType;
	pageTransitionVariants: TransitionsType;
	hasVisited: boolean;
	setLayoutIsActive: (isActive: boolean) => void;
};

const Page = (props: Props) => {
	const { data, pageTransitionVariants } = props;

	const logosAnimation = useAnimation();
	const projectsAnimation = useAnimation();

	const handleMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		const moveX = clientX - window.innerWidth / 2;
		const moveY = clientY - window.innerHeight / 2;
		const projectsOffsetFactor = 25;
		const logosOffsetFactor = 80;
		projectsAnimation.start({
			x: moveX / projectsOffsetFactor,
			y: moveY / projectsOffsetFactor
		});
		logosAnimation.start({
			x: moveX / logosOffsetFactor,
			y: moveY / logosOffsetFactor
		});
	};

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
			<Inner onMouseMove={(e) => handleMouseMove(e)}>
				<Projects data={data?.projects} animation={projectsAnimation} />
				<LogoBlock animation={logosAnimation} />
			</Inner>
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
