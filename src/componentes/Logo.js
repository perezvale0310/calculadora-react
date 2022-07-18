import React from 'react';
import '../estilos/Logo.css';

function Logo(props) {
  return (
    <div className='logo-contenedor'>
      <img
        src={props.logo}
        className='logo'
        alt='Logo' />
    </div>
  );
}

export default Logo;