import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import axiosWithAuth from "../axiosAuth/axiosWithAuth";
import {useHistory} from "react-router-dom";
import * as yup from "yup"
import {userFormSchema} from '../../formSchema'

const SignUpForm = props => {

    const history = useHistory();
    const initialFormState = {
        // id: '',
        username: '',
        password: '',
    }

    // server err
    const [serverError, setServerError] = useState('')

    const [formState, setFormState] = useState(initialFormState)

    // control whether the form can be submitted
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    //managing state for errors
    const [errors, setErrors] = useState(initialFormState)

    /*INPUT CHANGE */

    const inputChange = e => {
        e.persist()
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.value
        }
        setFormState(newFormData)
    }

    const validateChange = (e) => {
        yup
            .reach(userFormSchema, e.target.name)
            .validate(e.target.value)
            //if valid then clear errors
            .then(valid => {
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch(err => {
                //if fails validation, set error to this.state
                console.log("There is an error,", err)
                setErrors({...errors, [e.target.name]: err.errors[0]})
            })
    }

    //Whenever state updates, validate form, if valid change button
    useEffect(() => {
        userFormSchema.isValid(formState).then(valid => {
            console.log("valid?", valid);
            setIsButtonDisabled(!valid)
        })
    },[formState])

    /*FORM SUBMIT */

    const formSubmit = (e) => {
        e.preventDefault()
        Axios
        // axiosWithAuth()
            .post('https://family-recipe-backend.herokuapp.com/auth/register', formState)
            // .get('https://family-recipe-backend.herokuapp.com/users/:id')
            .then(response => {
                console.log("Sign up successful : ",response);
                // console.log(response.data);
                setFormState(initialFormState);
                // localStorage.setItem("token", response.data.token);
                history.push("/log-in");
            })
            .catch(err =>{
                console.log("error post signup :", err);
            })

    }

    return (
        <Wrapper>
            <Headline>Sign Up</Headline>
            <Form id='signUpForm' onSubmit={formSubmit}>
                <Label htmlFor='username'>Username</Label>
                <Input 
                    id='username'
                    name='username'
                    placeholder='Enter your name'
                    value={formState.username}
                    onChange={inputChange}
                    type='text'
                    // required
                />

                <Label htmlFor='password'>Password</Label>
                <Input 
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    value={formState.password}
                    onChange={inputChange}
                    // type='email'
                    // required 
                />

                <Button id='submit' type='submit' disabled={isButtonDisabled}>Sign Up</Button>
            </Form>
        </Wrapper>

    )
}

const Headline = styled.h1`
    font-size: 3.5rem;
    padding: 5rem 0 1rem;
    max-width: 45rem;
    text-align: center;
    line-height: 3rem;
    color: #fff;
    text-shadow: 2px 3px 3px rgba(0,0,0,0.3);
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`

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
    &:disabled {
        background-color: white;
        border: 1px solid #ccc;
        color: #ccc;
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

export default SignUpForm