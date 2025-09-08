import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Assets/dropdown_icon.png'
import {ShopContext} from '../Context/ShopContext.jsx';
import Item from '../Components/Item/Item.jsx';

const ShopCategory = (props) => {
  const {all_product} =  useContext(ShopContext);
  // console.log(all_products);
  return (
    <div className='shop-category'>
          <img className="shop-category-banner" src={props.banner} alt="" />
          <div className="shop-category-indexShort">
            <p>
              <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shop-category-sort">
              Sort by <img src={dropdown_icon} alt="" />
            </div>
          </div>
          <div className="shop-category-products">
          {
              all_product.map((e,index)=>{
                
                if (props.category === e.category){
                  return <Item key={index} id={e.id} name={e.name} image={e.image}
                   old_price={e.old_price} new_price={e.new_price}/>
                }
                else {
                  return null;
                }
              })
            }
          </div>
          <div className="shop-category-loadmore">
               Explore more
          </div>
    </div>
  )
}

export default ShopCategory