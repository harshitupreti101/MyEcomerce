import React from 'react'
import './RelatedProducts.css'
import data_product from '../../Assets/data.js'
import Item from '../Item/Item'
const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
       <h1>Related Products</h1>
       <hr />
       <div className="relatedproducts-item">
          {
            data_product.map((e,index) => {
                  return  <Item key={index} id={e.id} name={e.name} image={e.image}
                old_price={e.old_price} new_price={e.new_price}/>
            })
          }
       </div>
    </div>
  )
}
export default RelatedProducts
