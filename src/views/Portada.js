import React from 'react';
import Layout from './../components/Layout';
import portada from './../images/portada.png';

const Portada = () => {
    return (
        <Layout className="portada">
            <div className="contenedor-portada">
                <div className="contenedor-imagen-portada">
                    <img className="imagen-portada" src={portada} alt="Portada" />
                </div>
                <div className="contenedor-pie">
                    Formando mejores docentes
                </div>
            </div>
        </Layout>
    );
};

export default Portada;