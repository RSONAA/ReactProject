import React from 'react';
import Button from '@mui/material/Button';
//import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import  '../assets/css/Loanapply.css';


const Loanapply =()=> {
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
    // const navigate=useNavigate();
    // const handlelogin=()=>{
    //     navigate('/')
    // }

  return (
    <div className='para' >
        {/* <p>Our aim is to protect and serve destitute children and ensure that they have education and dignity.
             <br></br>We provide a loving residential environment that serves the emotional, physical, and developmental 
             needs of orphaned, abandoned and disadvantaged children in South India.</p> */}

        <div className='form'>
        <form method='POST' onSubmit={handleSubmit} className="login-form">
                    <h2>Apply Loan Now!</h2>
                    <div className="input__fields">
                        <label htmlFor="text">Name</label>
                        <input type="text" name="full name"  placeholder='Full Name ' id="number" onChange={handlepassword}required minLength={4} maxLength={4} />
                    </div>
                    <div className="input__fields">
                    <div className="input__fields">
                        <label htmlFor="number">Email Address</label>
                        <input type="text" placeholder='Type your email address' name="number" id="number" onChange={handleemail}required />
                    </div>
                    <div className="input__fields">
                        <label htmlFor="number">Are you an existing user?</label>
                        <input type="text" placeholder='Yes/No' name="number" id="number" onChange={handleemail}required />
                    </div>
                        <label htmlFor="number">Mobile Number</label>
                        <input type="text" name="number" placeholder='Mobile No' id="number" onChange={handleemail}required minLength={10} maxLength={10} />
                    </div>
                    <div className="input__fields">
                        <label htmlFor="password">OTP</label>
                        <input type="text" name="number"  placeholder='OTP ' id="number" onChange={handlepassword}required minLength={4} maxLength={4} />
                    </div>
                    <div className="input__fields">
                        <label htmlFor="password">Enter Description</label>
                        <input type="number" name="number"  id="number" onChange={handlepassword}required minLength={4} maxLength={4} />
                    </div>
                    <Button variant="contained" >Apply</Button>
                </form>
                {/* <h1>HEy</h1> */}
        </div>
    </div>
  );
}

export default Loanapply
