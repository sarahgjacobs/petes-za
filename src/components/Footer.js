import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div >
        <InstagramIcon /> 
        <FacebookIcon /> 
        <TwitterIcon />  
        <p>2023 Created with React by Sarah Jacobs</p>

      </div>
    </div>
  )
}

export default Footer