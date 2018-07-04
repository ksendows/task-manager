import React from 'react';
import PropTypes from 'prop-types';
import Search from "../search";
import PriorityFilter from "../priorityFilter";
import Menu from '../menu';
import styles from './styles.css';

const Header = ({ search, onSearchChange, currentFilter, changePriorityFilter, onAddTodo, onOpenSettings }) => (
    <header className={styles.container}>
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
            <Menu onAddTodo={onAddTodo} onOpenSettings={onOpenSettings} />
        </div>
    </header>
);

Header.propTypes = {
    search: PropTypes.string,
    onSearchChange: PropTypes.func,
    currentFilter: PropTypes.string,
    changePriorityFilter: PropTypes.func,
    onAddTodo: PropTypes.func, 
    onOpenSettings: PropTypes.func.isRequired
};

Header.defaultProps ={
    onSearchChange: () => { },
    search: '',
    changePriorityFilter: () => {},
    currentFilter: 'all',
    onAddTodo: () => {}
};

export default Header;