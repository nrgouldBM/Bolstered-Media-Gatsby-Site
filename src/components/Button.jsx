import React from 'react'
import styled from 'styled-components';
import { COLORS, SHADOW } from '../constants';

export const StyledButton = styled.button`
	color: ${COLORS.primaryText};
    border: none;
	text-decoration: none;
	font-weight: 600;
	background: ${COLORS.primary};
	padding: 1rem 2.5rem;
	border-radius: 12px;
	box-shadow: ${SHADOW.normal};

	&:hover {
		background: ${COLORS.primarySoft};
		transform: scale(1.01);
	}

	transition: all 200ms ease;
`;


export default function Button({ children }) {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}
