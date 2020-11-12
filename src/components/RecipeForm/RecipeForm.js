import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const RecipeForm = props => {

    const initialFormState = {
        id: '',
        img: '',
        recipe_title: '',
        source: '',
        description: '',
        ingredients: [],
        method: [],
        category: ''
    }

    const [formState, setFormState] = useState(initialFormState)

    /*HANDLE DYNAMIC INGREDIENT INPUTS */

    const createIngredientInputs = () => {
        return formState.ingredients.map((ingredient, idx) => {
            return (
                    <Input 
                        value={ingredient} 
                        placeholder={`Enter Ingredient ${idx + 1}`}
                        onChange={e => updateIngredients(e, idx)}
                    />
            )
        })
    }

    const updateIngredients = (e, index) => {
        const formCopy = {...formState};
        formCopy.ingredients[index] = e.target.value;
        setFormState(formCopy)
    }

    const addIngredient = (e) => {
        e.preventDefault()
        setFormState( () => {
            return {
                ...formState,
                ingredients: [...formState.ingredients, ""]
            }
        })
    }

    /* METHOD */

    const createMethodInputs = () => {
        return formState.method.map((step, idx) => {
            return (
                <Input
                    value={step}
                    placeholder={`Enter step ${idx + 1}`}
                    onChange={e => updateMethod(e, idx)}
                />
            )
        })
    }

    const updateMethod = (e, index) => {
        const formCopyTwo = {...formState};
        formCopyTwo.method[index] = e.target.value;
        setFormState(formCopyTwo)
    }

    const addStep = (e) => {
        e.preventDefault()
        setFormState( () => {
            return {
                ...formState,
                method: [...formState.method, ""]
            }
        })
    }


    /*INPUT CHANGE */

    const inputChange = e => {
        e.persist()
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.value
        }
        setFormState(newFormData)
    }


    // useEffect(() => {
    //     console.log(formState)
    // },[formState])

    //On Form Submit Post to JSON Server

    const formSubmit = (e) => {
        e.preventDefault()

        Axios
            .post("http://localhost:8000/recipes", formState)
            .then(response => {
                console.log(response.data)

                setFormState(initialFormState)
            })

    }


    return (
        <Form id="recipeForm" onSubmit={formSubmit}>

            <Label htmlFor='recipe_title'>Recipe Name</Label>
            <Input
                id='recipe_title'
                name='recipe_title'
                type='text'
                placeholder='Enter the recipe name'
                onChange={inputChange}
                value={formState.recipe_title} 
            />

            <Label htmlFor='category'>Category</Label>
            <Select
                onChange={inputChange}
                value={formState.category}
                name='category'    
            >
                <option value='Breakfast'>Breakfast</option>
                <option value='Lunch'>Lunch</option>
                <option value='Dinner'>Dinner</option>
                <option value='Dessert'>Dessert</option>
            </Select>

            <Label htmlFor='source'>Recipe Source</Label>
            <Input
                id='source'
                name='source'
                type='text'
                placeholder='Enter the source of the recipe'
                onChange={inputChange}
                value={formState.source}
            />

            <Label>Description</Label>
            <TextAreaInput
                id='description'
                name='description'
                value={formState.description}
                onChange={inputChange} 
            
            />

            <Label>Image URL</Label>
            <Input
                id='img'
                name='img'
                type='text'
                placeholder='Enter Image URL of the recipe'
                onChange={inputChange}
                value={formState.img}
            />

            <Label htmlFor='ingredients'>Ingredients</Label>
            {createIngredientInputs()}
            <AddInputBtn onClick={addIngredient}>Add Ingredient</AddInputBtn>

            <Label htmlFor='method'>Method</Label>
            {createMethodInputs()}
            <AddInputBtn onClick={addStep}>Add Step</AddInputBtn>

            <Button id='submit' type='submit'>Add Recipe</Button>
        </Form>
    )
}

const Form = styled.form`
    background: #fff;
    padding: 3rem 2rem;
    margin: 2rem;
    border-radius: .5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
    font-size: 1.4rem;
    min-width: 450px;
`

const Input = styled.input`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

const Select = styled.select`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

const TextAreaInput = styled.textarea`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

const Label = styled.label`
    margin-top: 1rem;
    text-transform: uppercase;
`

const Button = styled.button`
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 6px;
    color: #fff;
    font-weight: 700;
    background: #882AE1;
    margin-top: 1rem;
    &:hover{
        background-color: #6712E0;
    }
`

const AddInputBtn = styled.button`
    width: 15rem;
    padding: .5rem;
    border-radius: 6px;
    margin: 1rem 0;
    border: 1px solid #ccc;
    &:hover{
        background-color: #ddd;
    } 
`

export default RecipeForm