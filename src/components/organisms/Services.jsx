import React from 'react'
import styled from 'styled-components'
import BackgroundSvg from '../atoms/BackgroundSvg'
import Card from '../atoms/Card'
import { SubTitle } from '../atoms/SubTitle'
import { Title } from '../atoms/Title'

const Container = styled.section`
    /* width: 80%; */
    margin: auto;
    margin-top: 10rem;
    position: relative;
`

const CardContainer = styled.div`
    padding-left: 10rem;
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
`

const BGSvg = styled(BackgroundSvg)`
    height: 40rem;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`

export default function Services() {
    return (
         <Container>
            <Title style={{ marginLeft: '10rem'}}>Services</Title>
            <CardContainer>
                <Card flexDir="column" alignItems="space-evenly" justifyContent="center">
                    <SubTitle>Paid Media Advertising</SubTitle>
                    <SubTitle>Paid Media Advertising</SubTitle>
                    <SubTitle>Paid Media Advertising</SubTitle>
                    <SubTitle>Paid Media Advertising</SubTitle>
                </Card>
                <Card flexDir="column" alignItems="space-evenly" justifyContent="center">
                    <SubTitle>Paid Media Advertising</SubTitle>
                </Card>
                <Card flexDir="column" alignItems="space-evenly" justifyContent="center">
                    <SubTitle>Paid Media Advertising</SubTitle>
                </Card>
                <Card flexDir="column" alignItems="space-evenly" justifyContent="center">
                    <SubTitle>Paid Media Advertising</SubTitle>
                </Card>
                <Card flexDir="column" alignItems="space-evenly" justifyContent="center">
                    <SubTitle>Paid Media Advertising</SubTitle>
                </Card>
                <Card flexDir="column" alignItems="space-evenly" justifyContent="center">
                    <SubTitle>Paid Media Advertising</SubTitle>
                </Card>
            </CardContainer>
            <BGSvg />
         </Container>
    )
}
