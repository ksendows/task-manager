import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ children, onClick, type, src }) => {
  let btnClass;  
  switch (type) {
      case "linkButton": 
        btnClass = styles.linkButton;
        break;
      case "toggleLink":
        btnClass = styles.toggleLink;
        break;
      case "modalClose": 
        btnClass = styles.modalClose;
        break;
      case "icon":
        btnClass = styles.icon;
        break;
      default:
        btnClass = styles.button;
    };

    if (src) return (
      <div className={btnClass} onClick={onClick} role="presentation">
        <img src={src} className={styles.icon} alt="icon" />
      </div>);
    
    return (
      <button className={btnClass} type={type} onClick={onClick}>{children}</button>);
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  src: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  src: '',
  children: ''
};

export default Button;
