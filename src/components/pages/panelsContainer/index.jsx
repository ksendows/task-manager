import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../panel';

const PanelsContainer = ({ visibleTodos, visibleInProcess, visibleOnReview, visibleFinished, onDeleteTodo, onEditTodo, onAddTodo} ) => (
    <Fragment>
        <Panel
            title="To do"
            todos={visibleTodos}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onAddTodo={onAddTodo} />

        <Panel
            title="In Process"
            todos={visibleInProcess}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onAddTodo={onAddTodo} />

        <Panel
            title="On Review"
            todos={visibleOnReview}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onAddTodo={onAddTodo} />

        <Panel
            title="Finished"
            todos={visibleFinished}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onAddTodo={onAddTodo} />
    </Fragment>
);

PanelsContainer.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.required,
        task: PropTypes.string.isRequired,
        dueDate: PropTypes.string.isRequired,
        creationDate: PropTypes.string.isRequired,
        priority: PropTypes.oneOf(['low', 'normal', 'high']).isRequired
    })).isRequired,
    visibleInProcess: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.required,
        task: PropTypes.string.isRequired,
        dueDate: PropTypes.string.isRequired,
        creationDate: PropTypes.string.isRequired,
        priority: PropTypes.oneOf(['low', 'normal', 'high']).isRequired
    })).isRequired, 
    visibleOnReview: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.required,
        task: PropTypes.string.isRequired,
        dueDate: PropTypes.string.isRequired,
        creationDate: PropTypes.string.isRequired,
        priority: PropTypes.oneOf(['low', 'normal', 'high']).isRequired
    })).isRequired,
    visibleFinished: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.required,
        task: PropTypes.string.isRequired,
        dueDate: PropTypes.string.isRequired,
        creationDate: PropTypes.string.isRequired,
        priority: PropTypes.oneOf(['low', 'normal', 'high']).isRequired
    })).isRequired,
    onDeleteTodo: PropTypes.func.isRequired, 
    onEditTodo: PropTypes.func.isRequired, 
    onAddTodo: PropTypes.func.isRequired
};

// PanelsContainer.defaultProps = {
//     handleSearchChange: () => { },
//     search: '',
//     handlePriorityFilterChange: () => { },
//     priorityFilter: 'all',
//     onAddTodo: () => { }
// };

export default PanelsContainer;
