/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import Search from "../search";
import PriorityFilter from "../priorityFilter";
import Menu from '../menu';
import styles from './styles.css';

const Header = ({ search, onSearchChange, currentFilter, changePriorityFilter, onAddTodo }) => {
    return (
    <header className={styles.header}>
        <div className={styles.left_menu}>
            <PriorityFilter
                changePriorityFilter={changePriorityFilter}
                currentFilter={currentFilter} />
            <Search
                search={search}
                onSearchChange={onSearchChange}
            />
        </div>  
        <h1 className={styles.title}>Task manager</h1>
        <div className={styles.right_menu}>
        <Menu onAddTodo={onAddTodo}/>
        </div>
    </header>
)};

Header.propTypes = {
    search: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    priorityFilter: PropTypes.string.isRequired,
    handlePriorityFilterChange: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired
};

export default Header;