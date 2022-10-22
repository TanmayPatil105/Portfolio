import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer row'>
        <div className="col-md-12 d-flex align-items-center justify-content-center">
            <SocialIcon url="https://github.com/TanmayPatil105"  bgColor='#5cb85c' fgColor='#282c34' className='mx-5'/>
            <SocialIcon url="https://discord.com/users/Txnmxy/6057" bgColor='#5cb85c' fgColor='#282c34' className='mx-5'/>
            <SocialIcon url="https://twitter.com/TanmayFCB" bgColor='#5cb85c' fgColor='#282c34' className='mx-5'/>
        </div>
    </div>
  )
}
