import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import { Title } from '../atoms/Title'
import Profile from '../../images/Profile.jpg'
import Avatar from '../atoms/Avatar'
import { TextSpan } from '../atoms/TextSpan'
import ArrowRight from '../Icons/ArrowRight'
import { COLORS } from '../../constants'
import AvatarGroup from '../molecules/AvatarGroup'

const Container = styled.div`
    margin: 10rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Box1 = styled.div`
    position: absolute;
    width: 20rem;
    height: 5rem;
    background-color: ${COLORS.gray};
    top: 0;
    left: 0;
`
const Box2 = styled.div`
    position: absolute;
    width: 20rem;
    height: 5rem;
    background-color: ${COLORS.gray};
    bottom: 0;
    right: 0;
`

export default function Experience() {
    return (
        <Container>
            <AvatarGroup>
                <Avatar size="10rem" img={Profile} />
                <Avatar size="10rem" img={Profile} />
            </AvatarGroup>
            <Title style={{ textAlign: 'center'}} size="3rem">Over <TextSpan width="12rem">15 years</TextSpan>  <br />of digital marketing <br />experience</Title>
            <Button secondary text="Meet The Team" icon={<ArrowRight />} />
            <Box1 />
            <Box2 />
        </Container>
    )
}