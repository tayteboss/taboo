import styled from 'styled-components';

type Props = {
	data: any;
};

const PageBuilderWrapper = styled.div``;

const OthernessPageBuilder = (props: Props) => {
	const { data } = props;

	const sections: any = {};

	// const sections: any = {
	// 	incomingSection:
	// 		linkToComp,
	// };

	return (
		<PageBuilderWrapper className="page-builder">
			{data &&
				data.map((section: any, i: number) => {
					{
						if (!sections[section.imageComponent]) {
							return (
								<div key={Math.random() * 10000}>
									No section found for{' '}
									{section.imageComponent}
								</div>
							);
						} else {
							const Component = sections[section.component];
							return (
								<Component
									key={`${section.component}-${i}`}
									{...section}
								/>
							);
						}
					}
				})}
		</PageBuilderWrapper>
	);
};

export default OthernessPageBuilder;
