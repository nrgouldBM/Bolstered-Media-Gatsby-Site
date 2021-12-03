import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: inline-flex;
    flex-direction: row-reverse;
`

export default function AvatarGroup({ children }) {

    return (
        <Container>
            {children}
        </Container>
    )
}
