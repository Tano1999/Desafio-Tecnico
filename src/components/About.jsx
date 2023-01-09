import React from 'react'

const AboutUs = () => {
        return (
           <div id='about' className='div_about'>
                <div className="container-fluid fluid-100">
                        <div className="row">
                                <div className="col-6 d-none d-lg-flex first_col_about">
                                {/* <img src={about} alt="imagen de personal de salud con instrumentos odontologicos" /> */}
                                </div>
                                <div className="col-12 col-lg-6 second_col_about">
                                        <div className="container-fluid fluid-new">
                                                <h2>¿Como trabajamos?</h2>
                                                <p>Conocemos tus necesidades, por eso trabajamos con productos de alta calidad, pero siempre cuidando tu bolsillo.</p>
                                                
                                        </div>
                                </div>
                        </div>
               </div>
               <div className='div_boxs_about'>
                        <div className="container-fluid">
                                <div className="boxs_about row">
                                        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className="box_about col-12 col-lg-3">
                                                <i className='icon-delivery-date-solid1'></i>
                                                <h3>Agilidad</h3>
                                                <p>Los tiempos de hoy no son los mismos y tu tiempo tampoco, comunicate con un click. </p>
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800" className="box_about col-12 col-lg-3 offset-lg-1">
                                                <i className='icon-hand-shake-solid'></i>
                                                <h3>Confianza</h3>
                                                <p>Nos gusta generar buenas relaciones con nuestros clientes, y lo conseguimos con una atención personalizada para cada uno de ellos.</p>
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000" className="box_about col-12 col-lg-3 offset-lg-1">
                                                <i className='icon-truck'></i>
                                                <h3>Envíos</h3>
                                                <p>No te preocupes por moverte, nosotros te lo llevamos.</p>
                                        </div>
                                </div>
                        </div>
               </div>
           </div>
        )   
}

export default AboutUs
