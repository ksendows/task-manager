import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Input = ({ value, type, name, placeholder, onChange }) => (
  <input
    className= {styles.input}
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  value: '',
  type: 'text',
  onChange: () => {},
  placeholder: ''
};

export default Input;
