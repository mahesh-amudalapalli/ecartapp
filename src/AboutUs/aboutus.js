import React from 'react'
import companyLogo from '../assets/images/AboutUs_hd.jpg'


export default function Aboutus() {
    return (
        <>
            <style>
                {`
                .st{
                    margin-top:20px;
                }
            
               `}
            </style>
            <div className='tab col-md-4' style={{float:'left',marginLeft:'50px',marginTop:'75px'}}>
               
                 <img className='st' width='100%' src={companyLogo} alt="BigCo Inc. logo" /> 
                
                
            </div>
        </>
    )
}
