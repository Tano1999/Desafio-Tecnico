import React, { useEffect, useState } from 'react'
import logo from '../images/icons/favicon/iconoMuela.png'

const Header = () => {
        const [closed, setClosed] = useState(false);

        useEffect(() => {
            setTimeout(() => {
                    document.getElementById("navbarSupportedContent")
                    ?.classList.remove("show")

                    document.getElementById("toggler")
                    ?.classList.add("collapsed")
            },)
        }, [closed])
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
                        <img src={logo} alt="logo de empresa"/>
                    </a>
                    <button id='toggler' className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon">
                        <i className='first-i'></i>
                        <i className='second-i'></i>
                        <i className='tird-i'></i>
                    </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#home" onClick={() => setClosed(!closed)}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about" onClick={() => setClosed(!closed)}>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#catalogue" onClick={() => setClosed(!closed)}>Catalogue</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#contact" onClick={() => setClosed(!closed)}>Contact</a>
                        </li>
                        <li className="nav-item d-flex">
                            <a className="nav-link social" aria-current="page" href="https://www.instagram.com/tomas.palmi/"><i className='icon-instagram'></i></a>
                            {/* <a className="nav-link social" aria-current="page" href="https://www.instagram.com/tomas.palmi/"><i className='icon-facebook'></i></a> */}
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )   
}

export default Header


