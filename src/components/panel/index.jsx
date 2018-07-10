import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../list';
import Sorting from '../sorting';
import Pagination from '../shared/pagination';
import Button from "../shared/button";
import sortByDate from "../../utils/sorting";
import styles from './styles.css';

const ROWS_PER_PAGE = 5;

export default class Panel extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.required,
            task: PropTypes.string.isRequired,
            dueDate: PropTypes.string.isRequired,
            creationDate: PropTypes.string.isRequired,
            fullfilment: PropTypes.string.isRequired,
            priority: PropTypes.oneOf(['low', 'normal', 'high']).isRequired
        })).isRequired,
        onDeleteTodo: PropTypes.func.isRequired,
        onAddTodo: PropTypes.func.isRequired,
        onEditTodo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            sortBy: { sortBy: "dueDate", direction: true },
            isPaginated: false,
            currentPage: 1
        };
    }

    handleSort = (sortMethod) => this.setState({ sortBy: sortMethod });

    handleSwitchPages = (nextPage) => this.setState({ currentPage: nextPage});

    render () {

        const { title, todos, onDeleteTodo, onAddTodo, onEditTodo } = this.props;
        const { currentPage, sortBy } = this.state;

        const isPaginated = todos.length > ROWS_PER_PAGE;

        let visibleTodos = sortByDate(todos, sortBy);

        const startRow = (currentPage - 1) * ROWS_PER_PAGE;
        const endRow = currentPage * ROWS_PER_PAGE;
        const totalPages = Math.ceil(todos.length / ROWS_PER_PAGE);

        if (isPaginated) visibleTodos = visibleTodos.slice(startRow, endRow);

        return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <Sorting onSort={this.handleSort} activeMethod={sortBy}/>
            </div>
            <List
                data={visibleTodos}
                onDeleteTodo={onDeleteTodo}
                onEditTodo={onEditTodo} />
            {isPaginated && 
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages}
                    onSwitchPages={this.handleSwitchPages}/>}
            <Button onClick={onAddTodo} type="buttonHover">Add a task...</Button>
        </div>
        );
    }
}





