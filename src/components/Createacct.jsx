import React, {useState,useEffect} from 'react';
import '../assets/css/Createacct.css'
import { useNavigate } from 'react-router-dom';
import { UserData } from './Service/Userapi';

const Createacct = () => {

    const navigate=useNavigate();
    const [data,setdata]=useState(
        {
        name:"",
        age:"",
        dob:"",
        aadhar:"",
        pan:"",
        native:"",
        mobile:""
        }
       )
    
    const handleSubmitu=(event)=>
    {
       event.preventDefault();
   
       UserData(data); 
       console.log(data)  
       navigate('/')
    }

    return (
        <>
          <div className="App">

            <form method='POST' onSubmit={handleSubmitu} className="login-form" style={{height:'100%'}}>
                <h2>Create Account</h2>
                <div className="input__fields">
                    <label htmlFor="number">ACCOUNT HOLDER NAME</label>
                    <input type="text"  placeholder="User Name" name="text" id="text" 
                    onChange={(e)=> setdata({...data,name:e.target.value})}
                    required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">AGE</label>
                    <input type="text" name="number" placeholder="Age" id="number" 
                    onChange={(e)=> setdata({...data,age:e.target.value})}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">DATE OF BIRTH</label>
                    <input type="text" name="number" placeholder='DD/MM/YYYY' id="number" 
                    onChange={(e)=> setdata({...data,dob:e.target.value})}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">AADHAR NUMBER</label>
                    <input type="text" name="number" placeholder='Aadhar No' id="number" 
                    onChange={(e)=> setdata({...data,aadhar:e.target.value})}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">PAN NUMBER</label>
                    <input type="text" name="number" placeholder='Pan No' id="number" 
                    onChange={(e)=> setdata({...data,pan:e.target.value})}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">NATIVE ADDRESS</label>
                    <input type="text" name="text" placeholder='Address' id="number" 
                    onChange={(e)=> setdata({...data,native:e.target.value})}required />
                </div>
                <div className="input__fields">
                    <label htmlFor="number">MOBILE NUMBER</label>
                    <input type="text" name="number" id="number" placeholder='Mobile Number' 
                    onChange={(e)=> setdata({...data,mobile:e.target.value})}required minLength={10} maxLength={10} />
                </div>
                <button ><b>Submit</b></button>
            </form>
          </div>
        </>
    )
};

export default Createacct;