import React, { useState, useEffect} from 'react'
import styled from 'styled-components'

const Search = props => {

    return (
        <Input 
            type='text' 
            placeholder='🔎 Search for Recipes' 
            onChange={props.handleSearchFilter}    
            value={props.search}
        />
    )
}

const Input = styled.input`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

export default Search