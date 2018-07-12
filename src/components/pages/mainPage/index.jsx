import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../panel';

const MainPage = ({ visibleTodos, visibleInProcess, visibleOnReview, visibleFinished, 
    onDeleteTodo, onEditTodo, onAddTodo, onDropTodo }) => (
    <Fragment>
        <Panel
            title="To do"
            todos={visibleTodos}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onAddTodo={onAddTodo} 
            onDropTodo={onDropTodo} />

        <Panel
            title="In Process"
            todos={visibleInProcess}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onAddTodo={onAddTodo} 
            onDropTodo={onDropTodo}/>

        <Panel
            title="On Review"
            todos={visibleOnReview}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onAddTodo={onAddTodo}
            onDropTodo={onDropTodo} />

        <Panel
            title="Finished"
            todos={visibleFinished}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            onAddTodo={onAddTodo}
            onDropTodo={onDropTodo} />
    </Fragment>
);

MainPage.propTypes = {
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
    onAddTodo: PropTypes.func.isRequired,
    onDropTodo: PropTypes.func.isRequired,
};

export default MainPage;
