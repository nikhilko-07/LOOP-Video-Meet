import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Navbar () {
   let routeTo = useNavigate();

  return (
    <div  style={{ display:"flex",height:"7vh", width:"100%"}} >
        <div className='col-6' style={{ fontSize:"2vw"}}  onClick={()=>{routeTo("/")}}>LOOP</div>
        <div className='col-6' style={{ }}> 
           
        </div>
        
    </div>
  )
}

