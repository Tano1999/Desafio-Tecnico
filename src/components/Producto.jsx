import React from 'react'
import '../styles/_tienda.scss';





const Producto = ({cantidad, id, title, price, image, closed}) => {

    return (
       <div className='main_producto row'>
        <div className="box_col col-2 text-center">
            <span className='text-tabla'>{cantidad}</span>
        </div>
        <div className="box_col col-2 text-center">
            <span className='text-tabla'>{title}</span>
        </div>
        <div className="box_col col-2 text-center">
            <span className='text-tabla'>{price}</span>
        </div>
        <div className="box_col col-2 text-center">
            <span className='text-tabla'>{(price*cantidad)}</span>
        </div>
        <div className="box_col col-2 text-center">
            <span className='img-tabla'><img src={image} alt={id} /></span>
        </div>
        <div className="box_col col-2 text-center">
            <span className='text-tabla' onClick={()=> closed(id)} ><i className='icon-cross'></i></span>
        </div>
       </div>
    )
}

export default Producto 