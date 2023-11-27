import React, {useState} from 'react';
import '../assets/css/InsuranceForm.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const InsuranceForm = () => {

    const navigate=useNavigate();
    const handlec=()=>{
        navigate('/');
    }
    const [First,setfirst]=useState("");
    const [Last,setlast]=useState("");
 
    const handleFirst=(event)=>
    {
        setfirst(event.target.value);
    }
    const handleLast=(event)=>
    {
        setlast(event.target.value);
    }
    
    const handleSubmit=(event)=>
    {
       event.preventDefault();
       console.log(First,Last);
    }

    


    return (
        <>
          <div className="App">

            <form method='POST' onSubmit={handleSubmit} className="login-form" style={{width:'350px',height:'600px'}}>
                <h2  style={{color:'#00008B',fontsize:'18px',paddingBottom:'10px'}}>Invest Now to Maximize Wealth!</h2>

                <div className="input__fields">
                    <label htmlFor="number" style={{fontsize:'18px',}}>Full Name*</label>
                    <input type="text"  placeholder="Enter Full Name" name="text" id="text" onChange={handleFirst}required />
                </div>

                <div className="input__fields">
                    <label htmlFor="number">Mobile number*</label>
                    <input type="number" name="number" placeholder="+91 Enter 10 digit mobile number" id="number" onChange={handleLast}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">Gender*</label>
                    <input type="text" name="number" placeholder='Male/Female' id="number" onChange={handleLast}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">Date of birth*</label>
                    <input type="text" name="number" placeholder='DD/MM/YYYY' id="number" onChange={handleLast}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">Email address*</label>
                    <input type="text" name="number" placeholder='Enter email address' id="number" onChange={handleLast}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">Annual Income[in Lakhs]*</label>
                    <input type="option" name="option" placeholder='[in Lakhs]' id="option" onChange={handleLast}required />
                </div>
               
                <Button onClick={handlec} variant="contained">CHECK RETURNS</Button>
            </form>
          </div>
        </>
    )
};

export default InsuranceForm;
