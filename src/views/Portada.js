import React from 'react';
import portada from './../images/portada.png'

const Portada = () => {
    return (
        <div className="contenedor-portada">
            <div className="contenedor-imagen-portada">
                <img className="imagen-portada" src={portada} alt="Portada" />
            </div>
        </div>
    );
};

export default Portada;