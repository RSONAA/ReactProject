
import * as React from 'react';

import Button from '@mui/material/Button';

const Loan=()=>{

  return(
       <div >
        <img src='https://th.bing.com/th/id/OIP.49ZO88J3l6pJs1joUZscnAHaEb?rs=1&pid=ImgDetMain' alt='hello' style={{width:'1475px',maxHeight:'400px'}}></img>
        <div >
           <h2 style={{backgroundColor:'grey',margin:'0',textAlign:'center',height:'50px',width:'1475px',color:'white'}}>SS Bank Personal Loan Scheme</h2>
        </div>
        <div>
          <p style={{backgroundColor:'#D3D3D3',margin:'0',textAlign:'center',height:'50px',width:'1475px',color:'black',paddingTop:'10px'}}>Home >  Loans >  SS Bank Personal Loan Scheme</p>
        </div>
        <div>
          <p style={{backgroundColor:'#F8F8F8',margin:'2',height:'200px',color:'black',paddingTop:'70px',paddingLeft:'70px',fontSize:'25px',display:'inline-block'}}>SS bank Personal Laon Scheme is to cater to the requirements of meeting personal expenses.<br></br>We offer fast processing of your loan. Now you need not postpone things on your bucket list!<br></br>Also, you can transfer your existing high interest Personal Loan to Bank of SS as well.<br></br>With a fast approval,turn your dreams into reality!</p>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQAXr23qYxs0k8bhONDRAgg1571vbm8SDuH9300paMrBwyNj_WT01zbDDn9t1OALl0rw&usqp=CAU' alt='hello' style={{height:'200px',padding:'10px',paddingTop:'10px'}}></img>
        </div>
        <h3 style={{textAlign:'center'}}> Apply for an loan with the Interest of 8%P.A</h3>
        <div style={{paddingLeft:'700px'}}>
          <Button  variant="contained"  size="medium" style={{color:'white',background:'grey',textAlign:'center'}}>
         <h3>APPLY</h3>
        </Button>
        </div>
        </div>
    )
}
export default Loan