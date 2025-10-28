import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ id, label, onClick, variant = 'primary', disabled = false }) => {
    return (
        <button
            id={id} // Add id prop
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

// PropTypes to define expected props
Button.propTypes = {
    id: PropTypes.string,              // Optional id for the button
    label: PropTypes.string.isRequired, // Text to display on the button
    onClick: PropTypes.func,           // Function to call on button click
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']), // Style variant
    disabled: PropTypes.bool,          // Disable the button
};

// Default props
Button.defaultProps = {
    id: null, // Default id is null
    onClick: () => { },
    variant: 'primary',
    disabled: false,
};

export default Button;
