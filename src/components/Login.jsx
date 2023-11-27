import React, {useState,useEffect} from 'react';
import '../assets/css/Login.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { getUserData } from './Service/Userapi';

const Login= () => {

    
    const [number,setNumber]=useState("");
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const [data,setdata]=useState([]);
 
    const handlepassword=(event)=>
    {
        setpassword(event.target.value);
    }
    const handlenum=(event)=>
    {
        setNumber(event.target.value);
    }
    const handleemail=(event)=>
    {
        setemail(event.target.value);
    }
    
    useEffect(()=>
    {
      const fetchData =async()=>
      {
         await getUserData ()
         .then((ress)=>setdata(ress.data))// inbuild data
         .catch((e)=>console.error(e));
      }
      fetchData();
    },[]);
    const navigate=useNavigate();

    const handlelogin=(event)=>
    {
       event.preventDefault();
       console.log(password,email);
       const somedata=data.findIndex((props)=>props.mobile===number);
       console.log(somedata)
       if( somedata!==-1&& data[somedata].mobile===number) {
      
           navigate('/');
         
       }
  
       else if(somedata===-1)
       {
         alert("invalid password/emailid");
         navigate('/Createacctn');
       }
      

    }


    return (
        <>
          <div className="App" style={{height:'710px'}}>

            <form method='POST' className="login-form" style={{width:'400px',height:"350px"}} onSubmit={handlelogin}>
                <h2>SIGN IN</h2>
                <div className="input__fields">
                    <label htmlFor="number">ACCOUNT NUBMER</label>
                    <input type="text" placeholder='Account No' name="number" id="number" value={email}onChange={handleemail}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">MOBILE NUMBER</label>
                    <input type="text" name="number" placeholder='Mobile No' id="number" value={number} onChange={handlenum}required minLength={10} maxLength={10} />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">OTP</label>
                    <input type="text" name="number"  placeholder='OTP ' id="number" value={password} onChange={handlepassword}required minLength={4} maxLength={4} />
                </div>
                <Button type='submit' variant="contained">SIGN IN</Button>
            </form>
          </div>
        </>
    )
};

export default Login;