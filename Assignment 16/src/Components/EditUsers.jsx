import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = () => {
    const {id} = useParams()
    const [editUser, seteditUser] = useState([]);
    const navigate = useNavigate();

useEffect(()=>{
    axios
    .get("http://localhost:3000/users/" +id)
    .then((res)=>seteditUser(res.data))
    .catch((err)=>console.log(err))
},[]);


    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .put("http://localhost:3000/users/"+id,editUser)
        .then((res)=>{
            alert("User Successfully updated");
            navigate("/");
        })
        .catch((err)=>console.log(err));  
        
       
    };

  


    return (
        <form onSubmit={handleSubmit}>
            <Paper elevation={10} sx={{ marginTop: 5, marginLeft: 45, marginRight: 45, padding: 5 }}>
                <Typography variant='h4' sx={{ marginBottom: 5 }}>Edit User</Typography>


                <TextField onChange={(e) => {
                    seteditUser({ ...editUser, name: e.target.value });
                }} sx={{ mb: 3 }} fullWidth name='name' value={editUser.name} />


                <TextField onChange={(e) => {
                    seteditUser({ ...editUser, username: e.target.value });
                }} sx={{ mb: 3 }} fullWidth name='username' value={editUser.username} />
                <TextField onChange={(e) => {
                    seteditUser({ ...editUser, email: e.target.value });
                }} sx={{ mb: 3 }} fullWidth name='email' value={editUser.email} />
                <TextField onChange={(e) => {
                    seteditUser({ ...editUser, phone: e.target.value });
                }} sx={{ mb: 3 }} fullWidth name='phone' value={editUser.phone} />

                <Button variant="contained" type="submit">
                    Edit
                </Button>
            </Paper>
        </form>
    )
}

export default EditUsers

