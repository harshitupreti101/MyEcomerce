import React from 'react'
import Navbar from './Components/Navbar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignUp from './Pages/LoginSignUp.jsx'
import Product from './Pages/Product.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kid_banner from './Assets/banner_kids.png'
import Footer from './Components/Footer/Footer.jsx' 

const App = () => {
  return (
    <div>
      <BrowserRouter>   
          <Navbar />    
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}></Route>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
            <Route path='/login' element={<LoginSignUp/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/product/:productId' element={<Product/>}/>
            <Route path='*' element={<Shop />} />
          </Routes>
          <Footer/>


      </BrowserRouter>
    </div>
  )
}

export default App