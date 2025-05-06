import React from 'react'
import FormProducto from './FormProducto'

export const RegistroProducto = () => {
  return (
    <div className='d-flex flex-column'>
        <h1 className='text-center'>Registro de Producto</h1>
         
        <div className="d-flex justify-content-center"> 
            <FormProducto/>
         
        </div>
    </div>
  )
}
