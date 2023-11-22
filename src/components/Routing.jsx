import React from 'react'
import Home from './Home.jsx'
import { Route,Routes } from 'react-router-dom'
import Login from './Login.jsx'
import Createacct from './Createacct.jsx';
const Routing = () => {
  return (
   <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Createacctn' element={<Createacct/>}/>
   </Routes>
  )
}

export default Routing