
import * as React from 'react';
import InsuranceForm from './InsuranceForm';
import Marquee from 'react-fast-marquee';
const Insurance=()=>{
  return(
             <div style={{background:'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)'}}>
    <Marquee className="marquee" style={{fontFamily:'unset'}} pasueOnHover={true} speed={100}>
             <h2>In this policy, the investment risk in investment portfolio is borne by the policyholder.</h2>
             </Marquee>
        {/* <p style={{paddingLeft:'80px'}}>In this policy, the investment risk in investment portfolio is borne by the policyholder.</p> */}

        <div style={{fontSize:'30px',paddingLeft:'80px'}}> 
            <h1>Take A Step Forward Towards Securing <br></br>Your Tomorrow With <h3 style={{color:'red',display:'inline'}}>SS Bank!</h3></h1>
        </div>

        <div style={{display:'flex'}}>
            <div>
        <div style={{fontSize:'25px',paddingLeft:'100px'}}>
            <h2>Chooose between 3 Plan Options to <br></br> meet your financial milestone:</h2>
        </div>

            <div  style={{fontSize:'18px',paddingLeft:'160px',paddingTop:'8px'}}>
            <h2>1. Maximizer for Wealth Creation</h2>
            </div>

            <div style={{fontSize:'18px',paddingLeft:'160px',paddingTop:'8px'}}>
                <h2>2. Rising Star for safeguarding <br></br> your Child's Future</h2>
            </div>

            <div style={{fontSize:'18px',paddingLeft:'160px',paddingTop:'8px'}}>
                <h2>3. Retire Rich for Planning your <br></br> Retirement</h2>
            </div>

            <div style={{fontSize:'25px',paddingLeft:'100px',paddingTop:'8px'}}>
                <h2>100% allocation of your premium</h2>
            </div>

            <div style={{fontSize:'25px',paddingLeft:'100px',}}>
                <h2>Avail Tax benefits^</h2>
            </div>
            </div>
            <div style={{paddingLeft:'170px'}}>
            <InsuranceForm/>
            </div>
            </div>
        
        <div style={{display:'flex',alignItems:'center'}}>
      <input
        type="checkbox" style={{height:'25px',width:'25px',margin: '50px' ,display:'flex',marginRight:'2px'}}/>
        <label><h3 style={{paddingRight:'300px',paddingTop:'45px'}}>By sharing above details, I agree to KLI and its representatives contacting me through call, SMS, email or<br></br> WhatsApp even if I am registered under NDNC. I also agree that I have read and understood the Privacy<br></br> policy and agree to abide by the same</h3></label>
    </div>

            
       </div>
    )
}
export default Insurance