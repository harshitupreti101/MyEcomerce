import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_to_cart from '../../assets/add_to_cart.png'
import list_product_icon from '../../assets/list_product_icon.png'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to='/addproduct' style={{textDecoration:"none"}}>
          <div className="sidebar-item">
              <img src={add_to_cart} height="30" width="25" alt="" />
              <p>Add Product</p>
          </div>
        </Link>
        <Link to='/listproduct' style={{textDecoration:"none"}}>
          <div className="sidebar-item">
              <img src={list_product_icon} height="30" width="25" alt="" />
              <p>Product List</p>
          </div>
        </Link>
    </div>
  )
}

export default Sidebar