import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../assets/css/Homecss.css';
import Marquee from 'react-fast-marquee';
import { useNavigate,Link } from 'react-router-dom';
import FadeMenu from './FadeMenu';
import Footer from './Footer';
import FadeMenu1 from './FadeMenu1';
import FadeMenu2 from './FadeMenu2';
import FadeMenu3 from './FadeMenu3';
import FadeMenu4 from './FadeMenu4';
import FadeMenu5 from './FadeMenu5';
import FadeMenu6 from './FadeMenu6';
// import Cards from './Cards';




// import Footer from './Footer';


export default function ButtonAppBar() {
  const navigate=useNavigate();
  const handlebutton=()=>{
      navigate('/login')
  }
  const navigate1=useNavigate();
  const handlebutton1=()=>{
      navigate1('/Createacctn')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}  >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }} display={'flex'}>
            <ul>
            <FadeMenu/>   
             </ul>
              <ul>
              <FadeMenu1/>
              </ul>
              <ul>
                <FadeMenu2/>
              </ul>
              <ul>
                <FadeMenu3/>
              </ul>
              <ul>
                <FadeMenu4/>
              </ul>
              <ul>
                <FadeMenu5/>
              </ul>
              <ul>
                <FadeMenu6/>
              </ul>

          </Typography>
        </Toolbar>
      </AppBar>
      <div className='background' >
      <br/><br/>
      <div className='tools'>  
          <Toolbar>
             <div className='items'style={{display:'flex',flexDirection:'row',height:'20px', padding:'35px',fontSize:'300px', justifyContent: 'space-between', alignItems: 'center'}}>
             </div>
             {/* <p className="word"><b>WELCOME  TO  SS BANK!</b></p> */}
             <Marquee className="marquee" style={{fontFamily:'unset'}} pasueOnHover={true} speed={100}>
             <h2>WELCOME TO SS BANK!  <br></br>  OPEN A SAVINGS ACCOUNT    APPLY ONLINE</h2>
             </Marquee>
        </Toolbar>
      </div><br></br><br></br><br></br><br></br>
      <div style={{textAlign:'center',borderColor:'blue',color:'white'}} id="bus">
        <div>
        <h4>To Apply Online</h4>
        </div>
        <div>
        {/* <Button onClick={handlebutton} variant='outlined'style={{borderColor:'black',color:'blue'}} ><h4>Login</h4></Button><br></br> */}
        <Button  onClick={handlebutton} variant="contained"  size="medium">
          Sign In
        </Button>
        <br></br>
        <br></br>
        <b>OR</b>
        <br></br>
        <h4>Already have an account?</h4>
        
        {/* <Button onClick={handlebutton1} variant='outlined' style={{borderColor:'black', color:'blue',paddingLeft:'10px',paddingBottom:'5px',paddingTop:'5px'}}><h4>Create</h4></Button> */}
        <Button onClick={handlebutton1} variant="contained" size="medium">
          Create
        </Button>
        </div>
      </div>
     </div> 
    <div style={{display:'flex',width:'800px',paddingLeft:'10px',paddingTop:'10px',paddingBottom:'10px'}}>
      <div style={{background:'radial-gradient(circle at 0.7% 1%, rgb(215, 248, 247) 0%, rgb(102, 188, 239) 100.2%)',width:'10000px',height:'520px',paddingleft:'20px'}}>
        <h2 style={{paddingLeft:'30px'}}>Quick Links!</h2>
        <ul style={{paddingBottom:'10px',width:'300px'}}>
        <li style={{paddingBottom:'10px'}} ><Link to='/loan'><strong> RBI Limited Liability Policy</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/loan'><strong>Loans</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>Insurances</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>Deposits</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>Savings</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>Donations</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>Agri Advisory Services</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>Value Chain Finances</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>SS Fastag Recharge</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>Digilocker</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>Generate CIBIL Score</strong></Link></li>
          <li style={{paddingBottom:'10px'}}><Link to='/insurance'><strong>Government Schemes</strong></Link></li>

        </ul>
      </div><div style={{paddingLeft:'60px'}}>
      <div style={{border:'1px dotted #000',paddingLeft:'15px',paddingTop:'20px',width:'500px',height:'500px'}}>
        <h3 style={{color:'red',paddingleft:'10px'}}>THE LATEST</h3>
        <p style={{color:'red'}}>Customers are requested to note that old cheque books are being phased out with new ones having additional security features w.e.f. 01.07.2021. Please contact your branch manager for replacement of old cheque book with new cheque book well before the said date. If you have already issued cheque from old cheque book, please get it replaced with new cheque immeditely. On receipt of confirmation from you, Bank will delete the old cheque book records from Core Banking Solution (CBS) system.</p>
        <p  style={{color:'red'}}>You have registered for mandatory additional layer of security, by choosing 3 challenge questions and answering them. In case of providing incorrect answers to the such challenge questions your Internet Banking shall be blocked. In such case, please call our Customer Service at 1800-2222-44 & 1800-208-2244 and choose option no. 2 for further process.</p>
        <p style={{paddingTop:'10px',color:'red'}}>Bank has introduced 3 Factor Authentication (FA) to enhance the security features of your accounts, one time registration for the same is mandatory. <b>Challenge Question Enrollment by user[PDF file].</b></p>
        </div>
      </div>
      <div style={{paddingLeft:'70px'}}>
          <div style={{border:'1px dotted #000',paddingLeft:'50px',paddingTop:'10px',width:'400px',height:'270px'}}>
            <p style={{color:'blue'}}><span style={{color:'red'}}>SAFE & SECURE</span>  [INTERNET BANKING USAGE GUIDELINES]
            </p>
          <marquee direction="up" height='180px'>

          <p style={{paddingRight:'50px'}}><p style={{fontsize:'10px'}}>Check your account statements<br></br>periodically to ensure that all the <br></br>entries are correctly captured in <br></br>case of discrepancy inform.</p></p>
          </marquee>
        

          </div>
      <div style={{border:'1px dotted #000',paddingLeft:'50px',paddingTop:'0px',width:'400px',height:'240px',fontsize:"10px"}}>
      <p style={{color:'blue'}}><span style={{color:'red'}}>SAFEGUARD</span>  [BEWARE OF PHISHING]</p>
      <p style={{paddingRight:'15px',paddingDown:'20px'}}>Avoid fraudulent communications asking for your UserId, Password, Card No, Account No. etc. Fraudulent emails contain links of look-alike websites to capture your financial data. Bank will never send such communications to you asking for your personal/confidential data. Always visit Bank's site instead of clicking on the links provided in emails/other websites.</p>
        </div>
      </div>
    </div>
        <Footer/>
</Box>
);
}
