import React from 'react'


export const Contact = () => {
    return (
        <div id="contact">
            <div className="container-fluid">
                <div className="divContact">
                    <h3 className="text-center mb-4">Contact</h3> <br /> <h2>No dudes en enviarnos tu consuta </h2> <h4>Completa los campos y nos estaremos <br />  comunicando a la brevedad.</h4>
                    <form action="enviar.php" method="post" className="row m-0 text-center">
                        <label className="alignForm">
                            Nombre
                            <input autoComplete = "off" className="col-12 col-lg-8 inputBorder p-2 " type="text" name="nombre" required />
                        </label>
                        <label className="alignForm">
                            E-mail
                            <input autoComplete = "off" className="col-12 col-lg-8 inputBorder p-2" type="email" name="correo" required />
                        </label>
                        <label className="alignForm">
                            Consulta
                            <textarea name="mensaje" className="col-12 col-lg-8 inputBorder p-2 mt-3" required></textarea>
                        </label>


                        <button className="btn" type="submit" value="ENVIAR">Enviar</button>
                    </form>
                    <div className=" numberContact text-center mt-2 mb-0">
                        <p className='d-block d-lg-flex justify-content-center'>También podés contactarnos a través de WhatsApp :  
                        <a href="https://web.whatsapp.com/send?text=Hola! me estoy comunicando desde la web&phone=+541130584199" rel="noreferrer"  target="_blank" className="d-none d-lg-flex ms-2">1130584199</a>
                        <a href="https://api.whatsapp.com/send?text=Hola! me estoy comunicando desde la web&phone=+541130584199" rel="noreferrer" target="_blank" className="d-flex d-lg-none ms-2">1130584199</a>
                        </p>
                        <p className='mb-0'>o haciendo Click en el Icono <i className='icon-whatsapp-light ms-2 me-2'></i> del margen inferior</p>
                    </div>
                </div>

            </div>
        </div>
    )
}