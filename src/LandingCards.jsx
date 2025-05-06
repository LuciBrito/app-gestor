import React from 'react'
import { Link } from 'react-router-dom'

export const LandingCards = () => {
  return (
    <div className='d-flex flex-row justify-content-center pt-3 cont-card' >
        <Link to={'/ver-ventas'}>  
            <div className='d-flex card m-2 aling-items-center p-3'>
                <h2>Ver ultimos ventas</h2>
                <p>This is the first card.</p>
            </div>
        </Link>
        <Link to={'/registro-producto'}>    
            <div className='d-flex card m-2 aling-items-center p-3' >
                <h2>Registrar producto</h2>
                <p>This is the second card.</p>
            </div>
        </Link>
        <Link to={'/ver-algo'}> 
            <div className='d-flex card m-2 aling-items-center p-3'>
                <h2>Ver algo</h2>
                <p>This is the third card.</p>
            </div>
        </Link>
    </div>
  )
}
