import React from 'react'
import { useState } from 'react'

const Stars = ({totalStars, rating}) => {
    
    const rounded = Math.round(rating);
    const [star, setStar] = useState(0);
  return (
    <div>
      {
        [...Array(totalStars)].map((item, index) =>(
            <span key={index} style={{color: index < rounded ? 'gold' : 'gray'}}>
                &#9734;
            </span>
        ))
      }
      <span><small className="text-muted">{'('+rating+'/5)'}</small></span>
    </div>
  )
}

export default Stars
