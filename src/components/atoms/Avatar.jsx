import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants'

const Container = styled.div`
    width: ${p => p.size || '10rem'};
    height: ${p => p.size || '10rem'};
    position: relative;
    overflow: hidden;
`

const Img = styled.img`
    width: ${p => p.size || '10rem'};
    height: ${p => p.size || '10rem'};
    border-radius: 50%;
    object-fit: cover;
    display: block;
`

const Background = styled.div`
    width: ${p => p.size || '10rem'};
    height: ${p => p.size || '10rem'};
    background-color: ${COLORS.primary};
    border-radius: 50%;
    z-index: -1;
    position: absolute;
    top: 5px;
    left: 5px;

`

export default function Avatar({ img, size, background }) {
    return (
        <Container size={size}>
            <Img src={img} size={size} />
            {background && <Background size={size} />}
        </Container>
    )
}
