import React, {useState} from 'react';
import '../assets/css/Login.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Login= () => {

    
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
 
    const handlepassword=(event)=>
    {
        setpassword(event.target.value);
    }
    const handleemail=(event)=>
    {
        setemail(event.target.value);
    }
    
    const handleSubmit=(event)=>
    {
       event.preventDefault();
       console.log(password,email);
    }
    const navigate=useNavigate();
    const handlelogin=()=>{
        navigate('/')
    }


    return (
        <>
          <div className="App">

            <form method='POST' onSubmit={handleSubmit} className="login-form">
                <h2>SIGN IN</h2>
                <div className="input__fields">
                    <label htmlFor="number">ACCOUNT NUBMER</label>
                    <input type="text" placeholder='Account No' name="number" id="number" onChange={handleemail}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">MOBILE NUMBER</label>
                    <input type="text" name="number" placeholder='Mobile No' id="number" onChange={handleemail}required minLength={10} maxLength={10} />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">OTP</label>
                    <input type="text" name="number"  placeholder='OTP ' id="number" onChange={handlepassword}required minLength={4} maxLength={4} />
                </div>
                <Button onClick={handlelogin} variant="contained">SIGN IN</Button>
            </form>
          </div>
        </>
    )
};

export default Login;
