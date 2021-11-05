import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
	width: 90%;
	margin: auto;
`;
const StyledHeroTitle = styled.h1`
	font-size: 2.5rem;
`;

export default function Hero() {
	return (
		<StyledContainer>
			<StyledHeroTitle>
				<span>Full Service Digital</span> <br /> Marketing Partner
			</StyledHeroTitle>
		</StyledContainer>
	);
}
