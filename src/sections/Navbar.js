import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../components/nav/StyledLink';
import { StyledButtonLink } from '../components/nav/StyledButtonLink';

const StyledNavLinks = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	flex: 1;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
`;

const StyledLogo = styled.div`
	flex: 1;
`;

export default function Navbar() {
	return (
		<StyledContainer>
			<StyledLogo>
				<h2>Navbar</h2>
			</StyledLogo>
			<StyledNavLinks>
				<StyledLink to='/'>Home</StyledLink>
				<StyledLink to='/team'>Team</StyledLink>
				<StyledLink to='/services'>Services</StyledLink>
				<StyledButtonLink to='/contact'>Contact</StyledButtonLink>
			</StyledNavLinks>
		</StyledContainer>
	);
}
