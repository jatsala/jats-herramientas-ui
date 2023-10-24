import { Button } from '@mui/material'
import React from 'react';
import PropTypes from 'prop-types';

const Boton = ({ text = 'Botón', color = 'primary' }) => {
    return (
        <Button variant="contained" color={color}>{text}</Button>
    )
}

Boton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning'])
}

export default Boton
