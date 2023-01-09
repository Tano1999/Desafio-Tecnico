import React from 'react'
import '../styles/_tienda.scss';



const Producto = () => {
    return (
       <div className='main_producto row'>
        <div className="col-2 text-center">
            <span>Cant</span>
        </div>
        <div className="col-2 text-center">
            <span>Nombre</span>
        </div>
        <div className="offset-2 col-2 text-center">
            <span>Precio U</span>
        </div>
        <div className="col-2 text-center">
            <span>Precio T</span>
        </div>
        <div className="col-2 text-center">
            <span>Foto</span>
        </div>
       </div>
    )
}

export default Producto 