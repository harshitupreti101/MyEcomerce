import React, { createContext,useState,useEffect } from 'react'
import all_product from '../Assets/all_product.js'
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index<all_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
} 
const ShopContextProvider = (props) => {
    
    const storedCart = localStorage.getItem("cart");
    const [cartItems, setCartItems] = useState(storedCart ? JSON.parse(storedCart) : getDefaultCart());  
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId) => {
      setCartItems ((prev) => ({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) => {
      setCartItems ((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {

        if (cartItems[item]>0) {
          let itemInfo = all_product.find((product)=>product.id===Number(item));
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
      return totalAmount;
    }
    const getTotalItems = () => {
      let totalItems = 0;
      for (const item in cartItems) {
        totalItems += cartItems[item];
      }
      return totalItems;
    }
    const contextValue = {getTotalItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider;