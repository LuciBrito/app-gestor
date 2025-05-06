import React from 'react'
import { Link } from 'react-router-dom'

export const LandingCards = () => {
  return (
    <div className='d-flex flex-row justify-content-center p-3 cont-card gap-3' >
        <Link to={'/ver-ventas'}>  
            <div className='d-flex card aling-items-center p-3 w-100 text-center'>
                <h2>Ver ultimos ventas</h2>
                <p>This is the first card.</p>
            </div>
        </Link>
        <Link to={'/registro-producto'}>    
            <div className='d-flex card aling-items-center p-3 w-100 text-center' >
                <h2>Registrar producto</h2>
                <p>This is the second card.</p>
            </div>
        </Link>
        <Link to={'/ver-algo'}> 
            <div className='d-flex card  aling-items-center p-3 w-100 text-center'>
                <h2>Ver algo</h2>
                <p>This is the third card.</p>
            </div>
        </Link>
        <Link to={'/agregar-venta'}> 
            <div className='d-flex card aling-items-center p-3 w-100 text-center'>
                <h2>Agregar Venta</h2>
                <p>This is the third card.</p>
            </div>
        </Link>
    </div>
  )
}
