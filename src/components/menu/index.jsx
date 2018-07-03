/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/button';
import settings from '../../icons/settings.svg';
import login from '../../icons/login.svg';
import styles from './styles.css';

const Menu = ({ onAddTodo, onOpenSettings }) => (
    <nav>
        <ul className={styles.menu}>
            <li className={styles.menu_item}>
                <Button type="menuItem" onClick={onAddTodo}>+</Button>
            </li>
            <li className={styles.menu_item}>
                <Button type="menuItem" src={settings} onClick={onOpenSettings}></Button>
            </li>
            <li className={styles.menu_item}>
                <Button type="menuItem">i</Button>
            </li>
            <li className={styles.menu_item}>
                <Button type="menuItem" src={login}></Button>
            </li>
        </ul>
    </nav>
);


Menu.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    onOpenSettings: PropTypes.func.isRequired
};

export default Menu;
