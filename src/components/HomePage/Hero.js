import React from 'react'
import styled from 'styled-components'


const Hero = props => {

    return (
        <HeroWrapper>
            <Headline>Secret Family Recipes</Headline>
            <SubHead>Those little cards like grandma wrote recipes on in her beautiful cursive are easy to lose and get harder and harder to read over time. Secret Familiy Recipes is a secure place to keep your favorite family recipes and discover new ones!</SubHead>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
    display: grid;
    min-height: 300px;
    grid-template-columns: minmax(350px, 650px);
    justify-items: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 2rem;
`

const Headline = styled.h1`
    font-size: 4.5rem;
    letter-spacing: -.2rem;
`
const SubHead = styled.h4`
    font-size: 1.8rem;
    font-weight: 500;
`

export default Hero