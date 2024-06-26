import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto; //top, right, botton, left
    & > div {  //formcontrol is bydefault div
        margin-top : 20px
    }
`;

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {

    const [user, setUser] = useState(initialValues); //make state so user can be stored here, usestate is always constant [constant variable, state function] = useState(initial values)
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const addUserDetails = async() => { //to call function
        await addUser(user);
        navigate('/all');
    }

    return (
       <Container> 
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/> 
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetails()} variant="contained">Add User</Button>
            </FormControl>
       </Container>
    )
}

export default AddUser;