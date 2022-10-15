import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ComponenteB = ( estado ) => {
    const [ conect, setConect ] = useState(estado);
    return (
        <div>
            <h2>{ conect === false ? 'Contacto No Disponible' : 'Contacto En Linea' }</h2>
            <button onClick={() => setConect(!conect)}>{ conect === false ? 'Conectado' : 'Desconectado' }</button>
        </div>
    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool,
};


export default ComponenteB;
