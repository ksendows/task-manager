import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ children, onClick, type, src }) => {
  let btnClass; 
  let iconClass = styles.icon;
  switch (type) {
    case "buttonDisabled":
      btnClass = styles.button_disabled;
      break;
    case "buttonHover": 
      btnClass = styles.buttonHover;
      break;
    case "modalClose": 
      btnClass = styles.modalClose;
      iconClass = styles.iconClose;
      break;
    case "icon":
      btnClass = styles.icon;
      break;
    case "listLink":
      btnClass = styles.listLink;
      break;
    case "listLinkActive":
      btnClass = styles.listLinkActive;
      break;
    case "mapLink":
      btnClass = styles.mapLink;
      break;
    case "menuItem":
      btnClass = !src ? styles.menuItem_plus : styles.menuItem;
      break;
    case "menuBack":
      btnClass = styles.menuBack;
      iconClass = styles.iconClose;
      break;
    default:
      btnClass = styles.button;
    };

    if (src) return (
      <div className={btnClass} onClick={onClick} role="presentation">
        <img src={src} className={iconClass} alt="icon" />
        {children}
      </div>);
    
    return (
      <button className={btnClass} type={type} onClick={onClick}>{children}</button>);
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  onClick: PropTypes.func,
  type: PropTypes.string,
  src: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  src: '',
  children: '',
  onClick: () => {}
};

export default Button;
