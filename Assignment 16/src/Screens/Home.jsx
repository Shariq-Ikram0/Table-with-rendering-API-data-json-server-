import React, { useEffect, useState } from 'react'
import Tables from '../Components/Table'
import axios from 'axios'
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    
  const [userData , setUserDate] = useState([]);
  const navigate = useNavigate();
    const GetApi = ()=>{
        axios .get("http://localhost:3000/users")
        .then((res)=>setUserDate(res.data))
        .catch((err)=>console.log(err));
    }
    useEffect(GetApi,[])

    console.log(userData)
  return (
    <div>
        <Box  >
            <Button onClick={()=>navigate("/createUser")} variant='contained' sx={{marginBottom:5,float:'right',marginTop:3}}>Add User</Button>
        <Tables data={userData} /> 

        </Box>
     
      
    </div>
  )
}

export default Home
