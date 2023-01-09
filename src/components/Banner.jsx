import React from 'react'

const Banner = () => {
        return (
           <div id='home' className='div_banner'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 first_col'>
                            <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className='title'>En <span className='title_deco'>GiaDent</span>, <br /> hacemos la <br /> diferencia.</h1>
                            <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" className='subtitle'>Calidad y tecnología a tu servicio.</h4>
                            <div data-aos="fade-down" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="1500" className='btn_banner d-none d-lg-flex'>
                                <a href="#about" className='btn-1'>
                                    <i className='icon-arrow-up'></i>
                                </a>
                            </div>
                            <div className='btn_banner d-flex d-lg-none'>
                                <a href="#about" className='btn-1'>
                                    <i className='icon-arrow-up'></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-6 d-none d-lg-flex'></div>    
                    </div>
                </div>
           </div>
        )   
}

export default Banner
