import React from 'react'
import footerLogo from '../../../assets/logo_footer.png'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer footer-center mt-10 p-10 bg-[#282A30] text-primary-content">
  <div>
    <img src={footerLogo}/>
    <p className="text-lg">
      Yoga Fit. <br/>Providing reliable services since 1992
    </p> 
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <Link to='http://facebook.com' className='hover:text-blue-500'><FaFacebook className='text-2xl'/></Link>
      <Link to='https://twitter.com' className='hover:text-blue-500'><FaTwitter className='text-2xl'/></Link>
      <Link to='https://youtube.com' className='hover:text-blue-500'><FaYoutube className='text-2xl'/></Link>
    </div>
  </div>
</footer>
  )
}

export default Footer