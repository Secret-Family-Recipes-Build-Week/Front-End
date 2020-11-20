import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import axiosWithAuth from "../axiosAuth/axiosWithAuth";

const LoginForm = (props) => {

    const history = useHistory();
    const initialFormState = {
        username: '',
        password: '',
        
    };

    const [userLogin, setUserLogin] = useState(initialFormState);

    const inputChange = (e) => {
        e.persist();
        setUserLogin({...userLogin, [e.target.name] : e.target.value});
    };

    const formSubmit = (e) => {
        e.preventDefault();
        // axios
        axiosWithAuth()
        .post("/auth/login", userLogin)
        //https://family-recipe-backend.herokuapp.com
        .then(res => {
            console.log("login post request :", res);
            console.log("res token : ", res.data.token);
            localStorage.setItem('token', res.data.token);
            history.push('/');
        })
        .catch(err => {
            console.log("login post error :", err);
        });

    }
    return (
    <Wrapper>
        <Headline>Log In</Headline>
    <Form onSubmit = {formSubmit}>
        <Label htmlFor = "username">Username</Label>
        <Input
        type = "text"
        name = "username"
        placeholder = "Enter your username"
        value = {userLogin.username}
        onChange = {inputChange}
        required
        />

        <Label htmlfor = "password">Password</Label>
        <Input 
        type = "password"
        name = "password"
        placeholder = "Enter your password"
        value = {userLogin.password}
        onChange = {inputChange}
        required
        />
        <Button>Submit</Button>
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

export default LoginForm;