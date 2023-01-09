import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react'
import Catalogo from './catalogo/catalogo'
import Modal from './catalogo/Modal'
import photo from '../images/catalogo/descartables/descartables.jpg'

const Catalogue = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [seccionCatalogue, setSeccionCatalogue] = useState();
    const [seccionCatalogueId, setSeccionCatalogueId] = useState();


 
    const section = (seccion) => {
        setMostrarModal(true) 
        setSeccionCatalogue(seccion)
        setSeccionCatalogueId(seccion.id)
    }


    useEffect(() => {
        if (mostrarModal === true) {
            document.body.classList.add('no-scroll');
            // console.log("no-scroll")
        }else if (mostrarModal === false){
            // console.log("scroll")
            document.body.classList.remove('no-scroll');
        }
      },[mostrarModal])

    return (
        <div id='catalogue' className="div_catalogue_general">
            <div className="container-fluid">
                <div className='div_title text-center'><h3>Catalogue</h3><br /><h2>Encontrá todo lo que necesitas <br className='d-none d-lg-flex' /> en nuestro nuevo catálogo</h2></div>
                    <div className='div_catalogue'>
                            {Catalogo.map(seccion => (
                                <div id='box_item' key={seccion.id} onClick={() => section(seccion)} className="box_item p-4 "   
                                    /*style={{backgroundImage : 'url(../images/catalogo/' + `${seccion.carpeta && seccion.carpeta}` + '/' + `${seccion.imagen && seccion.imagen}` + ')'}}*/
                                    style={{backgroundImage : 'url(catalogo/'+ `${seccion.carpeta}` + '/' +`${seccion.imagen}`+')'}}>  
                                    <h3>{seccion.nombre}</h3>
                                </div>
                            ))}
                            {   mostrarModal === true ?
                                <Modal mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} seccion={seccionCatalogue} clave={seccionCatalogueId} />
                                : 
                                ""
                            }
                </div>
            </div>
        </div>
    )   
}

export default Catalogue
