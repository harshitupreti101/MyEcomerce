import React from 'react'
import new_collection from '../../Assets/new_collections'
import Item from '../Item/Item'
import './NewCollection.css'

const NewCollection = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {new_collection.map((e,index)=> {
                 return <Item key={index} id={e.id} name={e.name} image={e.image}
                old_price={e.old_price} new_price={e.new_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection