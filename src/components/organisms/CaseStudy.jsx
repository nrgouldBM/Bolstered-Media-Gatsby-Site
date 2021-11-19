import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants'
import { Body } from '../atoms/Body'
import FlexRow from '../atoms/FlexRow'
import TextBox from '../atoms/TextBox'
import { Title } from '../atoms/Title'
import Building from '../../images/building.png'

const Container = styled.section`
    margin: 0;
    margin-top: 5rem;
    display: flex;
    position: relative;
    flex-wrap: wrap;
`

const AsideBox = styled.div`
    width: 30rem;
    height: 125%;
    position: absolute;
    right: 0;
    top: -2rem;
    background-color: ${COLORS.gray};
    flex: 1;
    z-index: -1;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    flex: 2;
    margin: 0 10rem;
`

const Image = styled.img`
    max-width: 20rem;
    margin-right: 2rem;
`

export default function CaseStudy() {
    return (
        <Container>
            <MainContainer>
                <Title>Case Study: [Company]</Title>
                <Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim, culpa ipsam iure recusandae repellat molestias totam quos, ratione quia laborum et inventore dignissimos praesentium. Provident quidem voluptas quasi eum, tenetur doloribus quia explicabo natus, eveniet doloremque ab quos? Aliquam dignissimos repellat assumenda quae laborum animi numquam, perspiciatis odit repudiandae voluptatem dolorum explicabo, ullam nesciunt adipisci vitae recusandae ipsa! Dolor!</Body>
                <FlexRow alignItems="center" justifyContent="space-evenly" wrap="wrap">
                    <TextBox title="4.05%" label="Conv. Rate" />
                    <TextBox title="4.05%" label="Conv. Rate" />
                    <TextBox title="4.05%" label="Conv. Rate" />
                </FlexRow>
            </MainContainer>
            <Image src={Building} />
            <AsideBox />
        </Container>
    )
}
