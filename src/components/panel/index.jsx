/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../list/';
import Pagination from '../shared/pagination';
import Button from "../shared/button";
import sortIcon from '../../icons/sort.svg';
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
            priority: PropTypes.oneOf(['low', 'normal', 'high']).isRequired
        })).isRequired,
        onDeleteTodo: PropTypes.func.isRequired,
        onAddTodo: PropTypes.func.isRequired,
        onEditTodo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isSorted: false,
            isPaginated: false,
            currentPage: 1
        };
    }

    handleSortByDate = () => (
        this.setState(prevState => ({
            isSorted: !prevState.isSorted
        })));

    handleSwitchPages = (nextPage) => this.setState({ currentPage: nextPage});

    render () {

        // debugger;
        const { title, todos, onDeleteTodo, onAddTodo, onEditTodo } = this.props;

        const isPaginated = todos.length > ROWS_PER_PAGE;

        let visibleTodos = this.state.isSorted ? sortByDate(todos) : todos;

        const startRow = (this.state.currentPage - 1) * ROWS_PER_PAGE;
        const endRow = this.state.currentPage * ROWS_PER_PAGE;
        const totalPages = Math.ceil(todos.length / ROWS_PER_PAGE);

        if (isPaginated) visibleTodos = visibleTodos.slice(startRow, endRow);

        return (
        <div className={styles.panel}>
            <h2 className={styles.title}>{title}</h2>
            <div className={this.state.isSorted ? styles.icon_wrapper_transformed : styles.icon_wrapper}>
                <Button
                    onClick={this.handleSortByDate}
                    type="icon"
                    src={sortIcon} />
            </div>
            <List
                data={visibleTodos}
                onDeleteTodo={onDeleteTodo}
                onEditTodo={onEditTodo} />
            {isPaginated && 
                <Pagination 
                    currentPage={this.state.currentPage} 
                    totalPages={totalPages}
                    onSwitchPages={this.handleSwitchPages}/>}
            <Button onClick={onAddTodo} type="linkButton">Add a task...</Button>
        </div>
        );
    }
}




