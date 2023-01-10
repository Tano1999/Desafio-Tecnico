import React, { useState } from 'react'
import '../styles/_tienda.scss';
import Producto from './Producto';


const TestMain = () => {
    const [data, setData] = useState({});
    const [products, setProducts] = useState([]);

    const closed = (id) =>{
        const newArray = products.filter(product => ( product.id !== id ))
        setProducts(newArray)
    }

    const handleChange = (e) =>{
        if (e.target.value > 99){
            alert("no puede superar los 100 productos")
            document.getElementById("formProducto").reset();
        }else{
            setData({
                ...data,
                [e.target.name] : e.target.value
            })
        }
    }

    const sendInfo = (event) => {
        event.preventDefault();
        // console.log(data);

        const peticion = fetch(`https://fakestoreapi.com/products/${data.id}`);

        peticion.then((response) => 
            response.json())
            .then(res => {
                console.log(res);
                const cantidad = data.cantidad;
                res.cantidad = cantidad;
                setProducts([...products, res])
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
                        <button type='submit' className='btn'>agregar</button>
                    </form>
                </div>
                <div className="second-fiv">
                    <h3 className='subtitle'>Carrito de compra</h3>
                    <div className=" resultados">
                        
                        <div className="header_table row">
                            <div className="box_header col-2 text-center">
                                <span className='text-tabla'>Cant</span>
                            </div>
                            <div className="box_header col-2 text-center">
                                <span className='text-tabla'>Nombre</span>
                            </div>
                            <div className="box_header col-2 text-center">
                                <span className='text-tabla'>Precio U</span>
                            </div>
                            <div className="box_header col-2 text-center">
                                <span className='text-tabla'>Precio T</span>
                            </div>
                            <div className="box_header col-2 text-center">
                                <span className='text-tabla'>Foto</span>
                            </div>
                            <div className="box_header col-2 text-center">
                                <span className='text-tabla'>Eliminar</span>
                            </div>
                        </div>

                        <div className="body_table row">
                            {products.map( product => ( 
                                <div key={product.id} className='div_producto col-12'>
                                    <Producto cantidad={product.cantidad} id={product.id} title={product.title} price={product.price} image={product.image} closed={(id)=>closed(id)}/> 
                                </div>
                            ))}
                        </div>      
                    </div>
                </div>
            </div>
       </div>
    )
}

export default TestMain 