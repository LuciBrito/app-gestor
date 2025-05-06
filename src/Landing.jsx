import React from 'react'

import { LandingCards } from './LandingCards'

export const Landing = () => {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex flex-column'>  
          <div className='landing d-flex '>
            <h1>Bievenido!!</h1>
            <p>This is a simple landing page component.</p>
          </div>
          <LandingCards/> 
        </div>
    </div>
  )
}
