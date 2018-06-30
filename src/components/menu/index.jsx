/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/button';
import settings from '../../icons/settings.svg';
import login from '../../icons/login.svg';
import styles from './styles.css';

const Menu = ({ onAddTodo }) => (
    <nav>
        <ul className={styles.menu}>
            <li className={styles.menu_item}>
                <Button type="menuItem" onClick={onAddTodo}>+</Button>
            </li>
            <li className={styles.menu_item}>
                <Button type="menuItem" src={settings}></Button>
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
    onAddTodo: PropTypes.func.isRequired
};

export default Menu;
