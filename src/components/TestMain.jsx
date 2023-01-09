import React, { useState } from 'react'
import '../styles/_tienda.scss';
import Producto from './Producto';


const TestMain = () => {
    const [data, setData] = useState({});


    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const sendInfo = (event) => {
        event.preventDefault();
        console.log(data);

        // const data = JSON.stringify(form);
        const peticion = fetch(`https://fakestoreapi.com/products/${data.id}`);

        peticion.then((response) => 
            response.json())
            .then(data => {
                console.log(data)
            })
        .catch( console.warn)

        document.getElementById("formProducto").reset();
    } 

    return (
       <div className='main_tienda'>
            <div className="container-fluid">
                <h1 className='title'>Tienda - El topo</h1>
                <div className="first-fiv">
                    <h3 className='subtitle'>Agrega los productos al carro de compras</h3>
                    <form id='formProducto' onSubmit={sendInfo}>
                        <input type="number" placeholder='Cantidad' name="cantidad" id="cantidad" onChange={handleChange}  />
                        <input type="number" placeholder='ID del Producto' name="id" id="id" onChange={handleChange} />
                        <button type='submit' className='btn btn-success'>agregar</button>
                    </form>
                </div>
                <div className="second-fiv">
                    <h3 className='subtitle'>Carrito de compra</h3>
                    <div className=" container-fluid resultados">
                        <div className="row">
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
                            <div className='col-12'>
                                <Producto/> 
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
       </div>
    )
}

export default TestMain 