import React from 'react'
import styled from 'styled-components'
import UbumpLogo from '../../images/logos/ubump.png'
import PineapplesLogo from '../../images/logos/21pineapples.png'
import AshleyNicholeLogo from '../../images/logos/ashleynichole.png'
import CoastLandLogo from '../../images/logos/coastland.png'
import FTSLogo from '../../images/logos/fts.png'
import OldSouthLogo from '../../images/logos/old-south.png'
import { COLORS } from '../../constants'

const Container = styled.section`
    width: 100vw;
    margin: auto;
    background-color: ${COLORS.gray};
    margin-top: 5rem;
`

const LogosContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 3rem;
`

const Logo = styled.img`
    max-width: 10rem;
`

const LogosText = styled.h3`
    color: ${COLORS.secondaryText};
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    padding-top: 2rem;

`

export default function BrandLogos() {
    return (
        <Container>
            <LogosText>Trusted By These Brands</LogosText>
            <LogosContainer>
                <Logo src={UbumpLogo} />
                <Logo src={PineapplesLogo} />
                <Logo src={AshleyNicholeLogo} />
                <Logo src={FTSLogo} />
                <Logo src={OldSouthLogo} />
                <Logo src={CoastLandLogo} />
            </LogosContainer>
        </Container>
    )
}
