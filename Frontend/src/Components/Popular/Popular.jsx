import React from 'react'
import data from '../../Assets/data.js'
import Item from '../Item/Item.jsx'
import './Popular.css'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">{data.map((e,index) => {
                return <Item key={index} id={e.id} name={e.name} image={e.image}
                old_price={e.old_price} new_price={e.new_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular