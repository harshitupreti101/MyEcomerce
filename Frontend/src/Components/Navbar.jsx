import React, { useState,useContext,useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'


const Navbar = () => {
    const {getTotalItems} = useContext(ShopContext);
    const [underline,setUnderline] = useState("");
    const menuRef = useRef();
    // console.log(myRef);
    const underlineHandler = (val) => {
        setUnderline(val);
    }

    const dropDownToggle = (e) => {
        menuRef.current.classList.toggle ('nav-menu-visible'); 
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <i onClick={dropDownToggle} className="ri-bar-chart-horizontal-line"></i>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={() => {underlineHandler("Shop")}}><Link to='/' style={{textDecoration:'none', color:'#626262'}}>Shop</Link> {underline === "Shop" ? <hr/> : <></> }</li>
            <li onClick={() => {underlineHandler("Men")}}><Link to='/mens' style={{textDecoration:'none', color:'#626262'}}>Men</Link> {underline === "Men" ? <hr/> : <></> }</li>
            <li onClick={() => {underlineHandler("Women")}}><Link to='/womens' style={{textDecoration:'none', color:'#626262'}}>Women</Link> {underline === "Women" ? <hr/> : <></> }</li>
            <li onClick={() => {underlineHandler("Kids")}}><Link to='/kids' style={{textDecoration:'none', color:'#626262'}}>Kids</Link>  {underline === "Kids" ? <hr/> : <></> }</li>
        </ul>
        <div className="nav-login-cart">
            {
                localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
                :<button><Link to='/login' style={{textDecoration:'none', color:'#626262'}}>Login</Link> </button>
            }
            <Link to='/cart' style={{textDecoration:'none', color:'#626262'}}> <img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalItems()}</div>
        </div>
    </div>
  )
}

export default Navbar

