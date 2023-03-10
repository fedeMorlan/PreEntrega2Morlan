import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Secciones from '../Secciones/Secciones';
import Categorias from './Categorias/Categorias';
import { Link } from 'react-router-dom';
import BotonDarkMode from './BotonDarkMode/BotonDarkMode';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <img src="/knob11_64.png"></img>
                <Link className="navbar-brand storeName" to={"/"}>Distor Knob</Link>
                {/* boton para cuando se colapsa la navbar en screen chicos */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Secciones/>
                        <Categorias/>                              
                    </ul>
                    {/* el carrito pide parametro cantidad de items en el carro */}
                    <CartWidget/>
                    <BotonDarkMode/>            
                </div>                                
            </div>
        </nav>
    );
}

export default Navbar;
