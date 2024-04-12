import React from 'react'
import { Cards } from '../Components/card/Cards'
import ClassItems from '../assets/classItems.json'

const Classes = () => {
  return (
    <div className="classes">
      <div className="banner">
        
      </div>
      <h1>Classes</h1>
      <div className="classCard">
          {ClassItems.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
      </div>
    </div>
    
  )
}

export default Classes