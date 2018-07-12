import React from 'react';
import PropTypes from 'prop-types';
import Search from "../search";
import PriorityFilter from "../priorityFilter";
import Menu from '../menu';
import styles from './styles.css';

const Header = ({ page, search, onSearchChange, currentFilter, changePriorityFilter, 
    onAddTodo, onOpenSettings, onLogout, onAuthSubmenuOpen }) => 
    page === "main"
        ? ( <header className={styles.container}>
                <div className={styles.left_menu}>
                    <PriorityFilter
                        changePriorityFilter={changePriorityFilter}
                        currentFilter={currentFilter} />
                    <Search
                        search={search}
                        onSearchChange={onSearchChange} />
                </div>
                <h1 className={styles.title}>Task manager</h1>
                <div className={styles.right_menu}>
                    <Menu 
                        page={page}
                        onAddTodo={onAddTodo} 
                        onOpenSettings={onOpenSettings}
                        onLogout={onLogout} 
                        onAuthSubmenuOpen={onAuthSubmenuOpen}/>
                </div>
            </header>)
        : (<header className={styles.container_slider}>
                <div className={styles.left_menu} />
                <h1 className={styles.title}>Task manager</h1>
                <div className={styles.right_menu}>
                    <Menu 
                        page={page} />
                </div>
            </header>)
;

Header.propTypes = {
    page: PropTypes.string.isRequired,
    search: PropTypes.string,
    onSearchChange: PropTypes.func,
    currentFilter: PropTypes.string,
    changePriorityFilter: PropTypes.func,
    onAddTodo: PropTypes.func, 
    onOpenSettings: PropTypes.func.isRequired,
    onLogout: PropTypes.func,
    onAuthSubmenuOpen: PropTypes.func.isRequired
};

Header.defaultProps ={
    onSearchChange: () => { },
    search: '',
    changePriorityFilter: () => {},
    currentFilter: 'all',
    onAddTodo: () => {},
    onLogout: () => { }
};

export default Header;