import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import Categories from './Categories'

const FilterBox = props => {

    const { handleSearchFilter, search, setSearch } = props

    return (
        <FilterArea>
            <FilterWrapper>
                <Search 
                    handleSearchFilter={handleSearchFilter}
                    search={search}
                    setSearch={setSearch}
                />
                <Categories />
            </FilterWrapper>
        </FilterArea>
    )
}

const FilterArea = styled.div`
    display: grid;
    justify-content: center;
    padding: 2rem;
`

const FilterWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 500px;
    gap: 1rem;
    padding: 0 2rem;
`

export default FilterBox