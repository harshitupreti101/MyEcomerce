import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo_big.png'
import adminProfile from '../../assets/admin_profile.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-side'>
            <img src={navlogo} alt="" className="nav-logo"/>
            <div>
                <h1>SHOPPER</h1>
                <div>Admin Panel</div>
            </div>
        </div>
        <img src={adminProfile} alt="" className='admin-profile' />
    </div>
  )
}

export default Navbar