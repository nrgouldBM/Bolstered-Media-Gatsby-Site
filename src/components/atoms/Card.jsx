import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS, SHADOW } from '../../constants';

const flexStyles = css`
    display: flex;
    flex-direction: ${p => p.flexDir};
    align-items: ${p => p.alignItems};
    justify-content: ${p => p.justifyContent};

`

const Container = styled.div`
    /* overflow: hidden; */
    border-radius: 16px;
    background-color: #fff;
    box-shadow: ${SHADOW.normal};
    ${p => p.flexDir && flexStyles}
    padding: 2rem 1rem;
    margin: 1rem 2rem;
`

export default function Card({ children, flexDir, alignItems, justifyContent }) {
    return (
        <Container flexDir={flexDir} alignItems={alignItems} justifyContent={justifyContent}>
            {children}
        </Container>
    )
}
