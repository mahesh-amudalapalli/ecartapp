import React from 'react'
import companyLogo from '../assets/images/house_hd.jpg'

export default function Home() {
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
            {/* <img path='../assets/images/house.jpg' ></image> */}
            <img className='st' width='100%' src={companyLogo} alt="BigCo Inc. logo"/>
        </div>
        </>
    )
}
