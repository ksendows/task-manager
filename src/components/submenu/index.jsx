import React from 'react';
import PropTypes from 'prop-types';
import Button from "../shared/button";
import closeIcon from "../../icons/close.svg";
import styles from './styles.css';


const Submenu = ({ onLogout, onCloseSubmenu }) => (
    <div className={styles.container}>
        <Button onClick={onCloseSubmenu} type="modalClose" src={closeIcon} />
        <ul className={styles.menu}>
            <li className={styles.menu_link}>
                <Button type="buttonHover" onClick={onLogout}>Logout</Button>
            </li>
        </ul>
    </div>
);

Submenu.propTypes = {
    onLogout: PropTypes.func.isRequired,
    onCloseSubmenu: PropTypes.func.isRequired
};

export default Submenu;


