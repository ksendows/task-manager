/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Button from '../shared/button';
// import Submenu from '../submenu';
import settings from '../../icons/settings.svg';
import login from '../../icons/login.svg';
import styles from './styles.css';

export default class Menu extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isSubmenuOpen: false
        };
    }

    handleToggleSubmenu = () => this.setState(prevState => ({
        isSubmenuOpen: !prevState.isSubmenuOpen}));

    render () {
        const { page, onAddTodo, onOpenSettings, onLogout } = this.props;
        const { isSubmenuOpen } = this.state;
        
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
                                <Button type="menuItem">
                                    <Link to="/tutorial" className={styles.menu_item} target="_blank">i</Link>
                                </Button>
                            </li>
                            <li className={styles.menu_item}>
                                <Button type="menuItem" src={login} onClick={this.handleToggleSubmenu}/>
                                {isSubmenuOpen && 
                                    <ul className={styles.submenu}>
                                        <li className={styles.submenu_item}>
                                            <Button type="buttonHover" onClick={onLogout}>Logout</Button>
                                        </li>
                                    </ul>
                                }
                            </li>
                        </ul>
                    </nav>)
                    : (<nav>
                        <ul className={styles.menu}> 
                            <li className={styles.menu_item}>
                                <Button type="menuItem">
                                    <Link to="/tutorial" className={styles.menu_item} target="_blank">i</Link>
                                </Button>
                            </li>
                            <li className={styles.menu_item}>
                                <Button type="menuItem" src={login}>
                                    <NavLink to="/login" style={{width: '40px',height: '40px', display: 'block', position: 'absolute', top: 0}}/>
                                </Button>
                            </li>
                        </ul>
                    </nav>
))}
}

// Menu.propTypes = {
//     page: PropTypes.string.isRequired,
//     onAddTodo: PropTypes.func.isRequired,
//     onOpenSettings: PropTypes.func.isRequired,
//     onLogout: PropTypes.func.isRequired,
//     onLogin: PropTypes.func.isRequired
// };

// export default Menu;


