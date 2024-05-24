import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { HomePageType, TransitionsType } from '../shared/types/types';
import { motion, useAnimation } from 'framer-motion';
import client from '../client';
import { homePageQueryString } from '../lib/sanityQueries';
import Projects from '../components/objects/Projects';
import LogoBlock from '../components/objects/LogoBlock';
import { useState } from 'react';

const PageWrapper = styled(motion.div)`
	height: 100dvh;
	overflow: hidden;
`;

const Inner = styled(motion.div)``;

type Props = {
	data: HomePageType;
	frontProjects: HomePageType['projects'];
	behindProjects: HomePageType['projects'];
	pageTransitionVariants: TransitionsType;
	hasVisited: boolean;
	setLayoutIsActive: (isActive: boolean) => void;
};

const Page = (props: Props) => {
	const { data, frontProjects, behindProjects, pageTransitionVariants } =
		props;

	const [isHovered, setIsHovered] = useState(false);

	const logosAnimation = useAnimation();
	const frontProjectsAnimation = useAnimation();
	const behindProjectsAnimation = useAnimation();

	const handleMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		const moveX = clientX - window.innerWidth / 2;
		const moveY = clientY - window.innerHeight / 2;
		const frontProjectsOffsetFactor = 85;
		const logosOffsetFactor = 50;
		const behindProjectsOffsetFactor = 15;
		frontProjectsAnimation.start({
			x: moveX / frontProjectsOffsetFactor,
			y: moveY / frontProjectsOffsetFactor
		});
		logosAnimation.start({
			x: moveX / logosOffsetFactor,
			y: moveY / logosOffsetFactor
		});
		behindProjectsAnimation.start({
			x: moveX / behindProjectsOffsetFactor,
			y: moveY / behindProjectsOffsetFactor
		});
	};

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className="performance"
			onMouseMove={(e) => handleMouseMove(e)}
		>
			<NextSeo
				title={data?.seoTitle || ''}
				description={data?.seoDescription || ''}
			/>
			<Inner>
				<Projects
					data={behindProjects}
					animation={behindProjectsAnimation}
					isBehind
					setIsHovered={setIsHovered}
					isHovered={isHovered}
				/>
				<LogoBlock animation={logosAnimation} />
				<Projects
					data={frontProjects}
					animation={frontProjectsAnimation}
					setIsHovered={setIsHovered}
					isHovered={isHovered}
				/>
			</Inner>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await client.fetch(homePageQueryString);

	const frontProjects = data.projects.slice(0, data?.projects.length / 2);
	const behindProjects = data.projects.slice(data?.projects.length / 2);

	return {
		props: {
			data,
			frontProjects,
			behindProjects
		}
	};
}

export default Page;
