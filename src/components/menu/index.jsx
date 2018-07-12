import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '../shared/button';
import settings from '../../icons/settings.svg';
import login from '../../icons/login.svg';
import info from '../../icons/info.svg';
import styles from './styles.css';


const Menu = ({ page, onAddTodo, onOpenSettings, onAuthSubmenuOpen }) => {
    const linkStyle = {
        display: 'block', 
        position: 'absolute', 
        top: 0, 
        width: '40px',
        height: '40px',
        margin: '0 5px'
    };

    return (
        page === "main"
            ? ( <nav>
                    <ul className={styles.menu}>
                        <li className={styles.menu_item}>
                            <Button type="menuItem" onClick={onAddTodo}>+</Button>
                        </li>
                        <li className={styles.menu_item}>
                            <Button type="menuItem" src={settings} onClick={onOpenSettings} />
                        </li>
                        <li className={styles.menu_item}>
                            <Button type="menuItem" src={info}>
                                <NavLink to="/tutorial" style={linkStyle} target="_blank" />
                            </Button>
                        </li>
                        <li className={styles.menu_item}>
                            <Button type="menuItem" src={login} onClick={onAuthSubmenuOpen} />
                        </li>
                    </ul>
                </nav>)
                : (<nav>
                    <ul className={styles.menu}> 
                        <li className={styles.menu_item}>
                            <Button type="menuItem" src={info}>
                                <NavLink to="/tutorial" style={linkStyle} target="_blank" />
                            </Button>
                        </li>
                        <li className={styles.menu_item}>
                            <Button type="menuItem" src={login}>
                                <NavLink to="/login" style={linkStyle} />
                            </Button>
                        </li>
                    </ul>
                </nav>
))
};

Menu.propTypes = {
    page: PropTypes.string.isRequired,
    onAddTodo: PropTypes.func,
    onOpenSettings: PropTypes.func,
    onAuthSubmenuOpen: PropTypes.func
}

Menu.defaultProps = {
    onAddTodo: () => { },
    onOpenSettings: () => {},
    onAuthSubmenuOpen: () => { },
}

export default Menu;






