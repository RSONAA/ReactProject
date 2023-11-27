import React from 'react'
import Home from './Home.jsx'
import { Route,Routes } from 'react-router-dom'
import Login from './Login.jsx'
import Createacct from './Createacct.jsx';
import Loan from './Loan.jsx';
import Insurance from './Insurance.jsx';

const Routing = () => {
  return (
   <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Createacctn' element={<Createacct/>}/>
      <Route path='/loan' element={<Loan/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
   </Routes>
  )
}

export default Routing;