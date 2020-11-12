import React from 'react'
import styled from 'styled-components'

const Categories = props => {

    return (
        <Select 
            onChange={props.handleCategoryFilter}
            value={props.category}    
        >
            <option value=''>All Categories</option>
            <option value='Breakfast'>Breakfast</option>
            <option value='Lunch'>Lunch</option>
            <option value='Dinner'>Dinner</option>
            <option value='Dessert'>Dessert</option>
        </Select>
    )
}

const Select = styled.select`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

export default Categories