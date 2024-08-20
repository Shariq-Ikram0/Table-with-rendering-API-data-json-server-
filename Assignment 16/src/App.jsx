import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import CreateUsers from './Components/CreateUsers'
import EditUsers from './Components/EditUsers'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/createUser' element={<CreateUsers/>}/>
      <Route path='/edituser/:id' element={<EditUsers/>}/> 
    </Routes>
    </>
  )
}

export default App
