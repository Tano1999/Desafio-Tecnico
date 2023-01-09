import React from 'react'


export const Footer = () => {
    return (
        <div id="footer">
            <div className="fixed-bar position-fixed">
                <a href="https://web.whatsapp.com/send?text=Hola! me estoy comunicando desde la web&phone=+541130584199" 
                rel="noreferrer"  target="_blank" className="d-none d-lg-flex icon-whatsapp contact-btn"> </a>
                <a href="https://api.whatsapp.com/send?text=Hola! me estoy comunicando desde la web&phone=+541130584199" 
                rel="noreferrer" target="_blank" className="d-flex d-lg-none icon-whatsapp contact-btn"> </a>
            </div>
            <div className="container-fluid">
                <div className="row">
                <div className='order-2 order-lg-1 col-12 justify-content-center col-lg-4 first_footer_div'>
                    <p>SEGUINOS EN </p>
                    <p>INSTAGRAM /<a href="https://www.instagram.com/tomas.palmi/">@GiaDent</a></p>
                    {/* <p>FACEBOOK /<a href="https://www.instagram.com/tomas.palmi/">@GiaDent-facebook</a></p> */}
                </div>
                <div className="order-1 order-lg-2 col-12  col-lg-4 second_footer_div">
                    <div className="footer_center">
                        <p>GiaDent</p>
                        <p>Hacemos la diferencia</p>
                    </div>
                </div>
                <div className="order-3 order-lg-3 col-12 justify-content-center align-items-center align-items-lg-end col-lg-4 tird_footer_div">
                    <span>©Copyright 2023 - Tomas Palmitano</span>      
                </div>
                </div>
            </div>
        </div>
    )
}