import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateUsers = () => {
    const [createData, setCreateData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/users",createData)
        .then((res)=>{alert("User Successfully Created");
            navigate('/');
        })
        .catch((err)=>console.log(err));
    }

  


    return (
        <form onSubmit={handleSubmit}>
            <Paper elevation={10} sx={{ marginTop: 5, marginLeft: 45, marginRight: 45, padding: 5 }}>
                <Typography variant='h4' sx={{ marginBottom: 5 }}>Create User</Typography>
                <TextField onChange={(e) => {
                    setCreateData({ ...createData, name: e.target.value });
                }} sx={{ mb: 3 }} fullWidth label="Full Name" />
                <TextField onChange={(e) => {
                    setCreateData({ ...createData, username: e.target.value });
                }} sx={{ mb: 3 }} fullWidth label="User Name" />
                <TextField onChange={(e) => {
                    setCreateData({ ...createData, email: e.target.value });
                }} sx={{ mb: 3 }} fullWidth label="Email Address" />
                <TextField onChange={(e) => {
                    setCreateData({ ...createData, phone: e.target.value });
                }} sx={{ mb: 3 }} fullWidth label="Phone Number" />

                <Button variant="contained" type="submit">
                    Create
                </Button>
            </Paper>
        </form>
    )
}

export default CreateUsers
