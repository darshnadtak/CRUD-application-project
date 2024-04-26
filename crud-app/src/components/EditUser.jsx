import { useState, useEffect } from "react";


import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import { getUsers, editUser } from "../service/api";

const initialValues = {
    name : '',
    username : '',
    email : '',
    phone : ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto; //top, right, botton, left
    & > div {  //formcontrol is bydefault div
        margin-top : 20px
    }
`;

const EditUser = () => {

    const [user, setUser] = useState(initialValues); //make state so user can be stored here, usestate is always constant [constant variable, state function] = useState(initial values)
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await getUsers(id);
        setUser(response.data);
    } 

    const addUserDetails = async() => { //to call function
        await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    return (
       <Container> 
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/> 
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetails()} variant="contained">Edit User</Button>
            </FormControl>
       </Container>
    )
}

export default EditUser;