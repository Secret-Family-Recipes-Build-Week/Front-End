import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import Recipes from '../Recipes/Recipes'

const HomePage = props => {
    
    return (
        <HomePageWrapper>
            <Hero />
            <Recipes />
        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.div`
    padding: 0 0 2rem 0;
`

export default HomePage