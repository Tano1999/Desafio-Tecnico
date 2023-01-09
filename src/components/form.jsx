import React, { useEffect, useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({});
    const [disabled,setDisabled] = useState(true);

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    // const handleChecked = (e) =>{
    //     setForm({
    //         ...form,
    //         [e.target.name] : e.target.checked
    //     })
    // }

    const sendForm = (event) => {
        event.preventDefault();
        console.log(form);

        // const data = JSON.stringify(form);
        const peticion = fetch(``, { method: 'POST', body: JSON.stringify(form)});
        peticion.then(resp=>{
            console.log(resp)
        })
        .catch( console.warn)

        document.getElementById("formContact").reset();
        alert("Gracias por enviarnos tu consulta, en breve te responderemos.");
    } 

    return(
        <>
        <h2>Formulario</h2>
        <form onSubmit={sendForm} id="formContact">
            <div className="form-group mt-3">        
                <label htmlFor="nombre">
                    <input
                        type="text"
                        className="form-control"
                        id='nombre'
                        name="nombre"
                        placeholder="Nombre *"
    
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="email">
                    <input
                    type="email"
                    id='email'
                    className="form-control"
                    name="email"

                    placeholder="Email * "
                    onChange={handleChange}
                    />
                </label>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="apellido">
                    <input
                        type="text"
                        className="form-control"
                        id='apellido'
                        name="apellido"
                        placeholder="Apellido "
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="telefono">
                    <input
                        type="tel"
                        id='telefono'
                        className="form-control"
                        name="telefono"
                        placeholder="Teléfono *"
        
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="form-group mt-3">
                <textarea
                    className="form-control"
                    name="text"
                    placeholder="Mensaje "
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="form-group mt-3">
              <h3>selecciona tu preferencia</h3>

                <label htmlFor="blanco">blanco
                    <input type="radio" name="preferencia"  id="blanco" value="blanco" onChange={handleChange} />   
                </label>

                <label htmlFor="azul">azul
                    <input type="radio" name="preferencia"  id="azul" value="azul" onChange={handleChange} />
                </label>

                <label htmlFor="amarillo">amarillo
                 <input type="radio" name="preferencia"  id="amarillo" value="amarillo" onChange={handleChange} />   
                </label>
            </div>

            <div className="form-group mt-3 d-block">
                <label className='d-block' htmlFor="">selecciona una opción</label>
                <select name="option" id="" onChange={handleChange}>
                    <option value="first" defaultChecked ></option>
                    <option value="first" >first</option>
                    <option value="second" >second</option>
                    <option value="thirth" >thirth</option>
                </select>
            </div>

            <div className="form-group mt-3">
                <input type="checkbox" name="" id=""  onChange={() => setDisabled(!disabled)  } />
                <label htmlFor="">Acepto lo términos y condiciones</label>
            </div>
            <button type="submit " disabled={disabled} className={"btn btn-succes"}>
                Enviar 
            </button>
        </form>
        </>
    )
}

export default Form