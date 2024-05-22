import styled from 'styled-components';
import { HomePageType } from '../../../shared/types/types';
import ProjectCard from '../../elements/ProjectCard';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { KeenSliderPlugin } from 'keen-slider';

type Props = {
	data: HomePageType['projects'];
	isActive: boolean;
};

const ProjectsWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

const Slide = styled.div`
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: transform 0.5s ease-out, opacity 0.5s ease-out;
`;

const getRandomDirection = () => {
	const directions = [
		'translateX(-100vw)',
		'translateX(100vw)',
		'translateY(-100vh)',
		'translateY(100vh)'
	];
	return directions[Math.floor(Math.random() * directions.length)];
};

const animateSlideIn = (slide: HTMLElement) => {
	slide.style.transform = 'translate(0, 0)';
	slide.style.opacity = '1';
};

const carousel: KeenSliderPlugin = (slider) => {
	let autoplaySpeed = 3000;
	let direction = 1;
	let autoplay: any;

	const startAutoplay = () => {
		autoplay = setInterval(() => {
			if (direction === 1) {
				slider.next();
			} else {
				slider.prev();
			}
		}, autoplaySpeed);
	};

	const adjustAutoplaySpeed = (event: WheelEvent) => {
		clearInterval(autoplay);
		const delta = event.deltaY;
		if (delta > 0) {
			autoplaySpeed = Math.min(autoplaySpeed + 500, 5000);
		} else {
			autoplaySpeed = Math.max(autoplaySpeed - 500, 1000);
		}
		direction = delta > 0 ? 1 : -1;
		startAutoplay();
	};

	const slides = slider.slides;
	slides.forEach((slide) => {
		slide.style.transform = getRandomDirection();
	});

	slider.on('detailsChanged', () => {
		slides.forEach((slide, index) => {
			setTimeout(() => {
				animateSlideIn(slide);
			}, index * 100);
		});
	});

	slider.on('created', () => {
		setTimeout(() => {
			slides.forEach((slide, index) => {
				setTimeout(() => {
					animateSlideIn(slide);
				}, index * 100);
			});
		}, 500);
		startAutoplay();
		slider.container.addEventListener('wheel', adjustAutoplaySpeed);
	});

	slider.on('destroyed', () => {
		clearInterval(autoplay);
		slider.container.removeEventListener('wheel', adjustAutoplaySpeed);
	});
};

const Projects = (props: Props) => {
	const { data, isActive } = props;

	const hasData = data && data.length > 0;

	const [sliderRef] = useKeenSlider<HTMLDivElement>(
		{
			loop: true,
			selector: '.carousel__cell',
			renderMode: 'custom',
			mode: 'free-snap'
		},
		[carousel]
	);

	return (
		<>
			{hasData && (
				<ProjectsWrapper ref={sliderRef} className="keen-slider">
					{data.map((project, i) => (
						<Slide
							className="keen-slider__slide carousel__cell"
							key={i}
						>
							<ProjectCard data={project} slideCount={i + 1} />
						</Slide>
					))}
				</ProjectsWrapper>
			)}
		</>
	);
};

export default Projects;
