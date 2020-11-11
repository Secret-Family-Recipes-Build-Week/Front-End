import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = props => {
    
    return(
        <NavBox>
            <Logo to='/'>Secret Family Recipes</Logo>
            <Menu>
                <MenuLinks to='/my-recipes'>My Recipes</MenuLinks>
                <MenuLinks to='/discover'>Discover</MenuLinks>
                <MenuLinks to='/add-a-recipe'>Add a Recipe</MenuLinks>
            </Menu>
        </NavBox>
    )
}

const NavBox = styled.nav`
    display: grid;
    min-height: 50px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    align-content: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 0 3rem;
`


const Logo = styled(Link)`
    font-size: 2.4rem;
    text-decoration: none;
    color: inherit;
    letter-spacing: -1px;
    font-weight: 800;
    padding: 1rem;
`

const Menu = styled.div`
    justify-self: end;
`

const MenuLinks = styled(Link)`
    padding: 0 1rem;
    font-size: 1.4rem;
    letter-spacing: -1px;
    font-weight: 500;
    text-decoration: none;
    color: inherit;
    &:hover{
        font-weight: 600;
    }
`

export default Nav