import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = props => {
    
    return(
        <NavBox>
            <Logo to='/'>Secret Family Recipes</Logo>
            <Menu>
                <MenuLinks to='/'>Home</MenuLinks>
                <MenuLinks to='/sign-up'>Sign Up</MenuLinks>
                <MenuLinks to = '/log-in'>Log in</MenuLinks>
                <MenuLinks to='/add-a-recipe'>Add a Recipe</MenuLinks>
            </Menu>
        </NavBox>
    )
}

const NavBox = styled.nav`
    display: grid;
    min-height: 50px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-content: center;
    align-items: center;
    border-bottom: 2px solid #fff;
    padding: 0 3rem;
    color: #fff;
    text-shadow: 2px 3px 3px rgba(0,0,0,0.3);
    @media (max-width: 650px) {
        text-align: center;
    }

`


const Logo = styled(Link)`
    font-size: 2.4rem;
    text-decoration: none;
    color: inherit;
    letter-spacing: -.2rem;
    font-weight: 800;
    padding: 1rem;
    &:hover{
        text-shadow: 2px 3px 3px rgba(0,0,0,0.7);
    }
`

const Menu = styled.div`
    justify-self: end;
    @media (max-width: 650px){
        justify-self: center;
        padding-bottom: 1rem;
    }
`

const MenuLinks = styled(Link)`
    padding: 0 1rem;
    font-size: 1.4rem;
    letter-spacing: -1px;
    font-weight: 500;
    text-decoration: none;
    color: inherit;
    &:hover{
        text-shadow: 2px 3px 3px rgba(0,0,0,0.7);
    }
`

export default Nav