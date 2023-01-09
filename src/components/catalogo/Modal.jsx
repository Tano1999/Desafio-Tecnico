import React, { useEffect, useState } from 'react'

const Modal = ({seccion, clave,mostrarModal,setMostrarModal}) => {

    return (
            <div id='div_modal' className="div_modal">
                <div className="container-fluid">
                    <div className="modal_box">
                        <i onClick={() => setMostrarModal(false)} className='closed-box icon-close'></i>
                        <h2 className='title_seccion'>{seccion.nombre}</h2>
                        <div className="articulos">
                            {seccion.info.map((articulo,i) => (
                                <div key={i} className="div_articulo">
                                    <h4 className='title_articulo'>{articulo.nombre}</h4>
                                    {articulo?.productos?.length > 0 ? articulo?.productos?.map((producto,j) => (
                                        <div  key={j}>
                                            {/* {console.log(producto.producto[j].img)}*/}
                                            {/* {isImg(producto.producto)} */}
                                            {producto?.estilo?.length > 0 && 
                                            <h5 className='title_detalle'>{producto?.estilo}:</h5>
                                            }
                                            <div id='div_productos' className={'div_productos ' + (producto?.producto[j]?.img?.length > 0 ? "with_img" : "")}>
                                                {producto?.producto?.length > 0 ? producto.producto.map((name,k) => (
                                                    <div  key={k} className={'div_producto ' +  (name?.img?.length > 0 ? "with_img" : "")}>
                                                        {name?.img?.length > 0 && <div className='img-producto' style={{backgroundImage : 'url(catalogo/'+ `${seccion?.carpeta}` + '/' +`${name?.img}`+')'}}></div>}
                                                        <h6 className={'title_producto ' + (name?.img?.length > 0 ? "text-center" : "")}>{name?.img?.length > 0 ? "" : "*"}{name?.nombre}{ name?.info?.length > 0 && <span className='ms-3 info-product'>{"(" + name?.info + ")"}</span>}</h6>    
                                                    </div>
                                                ))
                                                : ""}
                                            </div>
                                            {articulo?.comentario?.length > 0 ? <p className='comentario'>{articulo.comentario}</p> : ""}
                                        </div>
                                        ))
                                        : ""}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )   
}

export default Modal
