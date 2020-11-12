import React from 'react'
import styled from 'styled-components'

const RecipeCard = props => {

    const { title, source, method, ingredients, description, img } = props

    return (
        <CardBox>
            <TitleBox>
                <RecipeTitle>{title}</RecipeTitle>
            </TitleBox>
            <RecipeContent>

                {img !== '' 
                    ? <RecipeImage src={img} /> 
                    : <></>
                }
                <SubHead>Source:</SubHead>
                <p>{source}</p>
                <SubHead>Description:</SubHead>
                <p>{description}</p>
                <SubHead>Ingredients:</SubHead>
                <Ul>
                {ingredients.map(ingredient => {
                    return (
                        <li>{ingredient}</li>
                    )
                })}
                </Ul>
                <SubHead>Method</SubHead>
                    <ol>
                        {method.map(step => {
                            return (
                                <li>{step}</li>
                            )
                        })}
                    </ol> 
            </RecipeContent>
        </CardBox>
    )
}

const CardBox = styled.div`
    background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=fbfbf8&noise=5c5c5c&density=5&opacity=35);
    border-radius: .5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
    align-content: start;
    font-size: 1.6rem;
    width: 100%;
    gap:1rem;
`

const TitleBox = styled.div`
    border-bottom: .2rem solid #AC503C;
    width: 100%;
    padding: 3rem 2rem 1rem 2rem;
`

const RecipeImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 30rem;
    border: 3px solid #fff;
    border-radius: 6px;
`

const RecipeTitle = styled.h3`
    font-size: 2.4rem;
    font-weight: 600;
`

const SubHead = styled.h3`
    font-size: 1.8rem;
    padding: 1rem 0 .25rem;
`

const RecipeContent = styled.div`
    padding: 1rem 2rem 3rem 2rem;
`

const Ul = styled.ul`
`


export default RecipeCard