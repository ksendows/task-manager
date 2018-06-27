/*eslint-disable*/
import React, { Component} from 'react';
import Modal from 'react-modal';
import Menu from "../menu/";
import PriorityFilter from "../priorityFilter";
import Button from '../shared/button/';
import Loader from '../shared/loader';
import Panel from '../panel/';
import Form from "../form";
import Search from "../search";
import { getVisibleTodos } from "../../utils/selectors";
import closeIcon from "../../icons/close.svg";
import data from '../../data.json';
import styles from './styles.css';

Modal.setAppElement('#root');

class App extends Component {
  state = {
        todos: data.todos,
        search: '',
        priorityFilter: 'all',
        isLoading: false,
        showModal: false,
        modalAction: '',
        activeTodo: {},
        activeList: 'todo'
  };

  handleOpenAddModal = e => {
    const list = e.target.parentNode.firstChild.textContent;
    return (this.setState({ 
      activeList: list,
      showModal: true,
      modalAction: "add" }))
  };

  handleCloseModal = () => this.setState({ showModal: false });

  handleOpenEditModal = (id) => this.setState(prevState => ({
    showModal: true,
    modalAction: "edit",
    activeTodo: prevState.todos.filter(todo => todo.id === id)[0]
  }));

  addTodo = (todo) => {
    this.setState({ isLoading: true });
    this.setState(prevState => ({
      isLoading: false,    
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  editTodo = (updatedTodo) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(
        todo => (todo.id === updatedTodo.id ? { ...updatedTodo } : todo),
      ),
    }));
  };

  handlePriorityFilterChange = priority => this.setState({ priorityFilter: priority });

  handleSearchChange = str => this.setState({ search: str });

  render() {

    const { isLoading, showModal, priorityFilter, search, 
        activeTodo, modalAction, activeList  } = this.state;

    const visibleTodos = getVisibleTodos(this.state, "To do");
    const visibleOnReview = getVisibleTodos(this.state, "On Review");
    const visibleInProcess = getVisibleTodos(this.state, "In Process");
    const visibleFinished = getVisibleTodos(this.state, "Finished");

    return (
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>Task manager</h1>
          <Menu />
        </header>

        <Search
          search={search}
          onSearchChange={this.handleSearchChange}
        />
        <PriorityFilter
          changePriorityFilter={this.handlePriorityFilterChange}
          currentFilter={priorityFilter} />

        {isLoading && <Loader width={80} height={80} />}
        <div className={styles.container}>

          <Panel 
            title="To do" 
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onEditTodo={this.handleOpenEditModal} 
            onAddTodo={this.handleOpenAddModal}/>

          <Panel
            title="In Process"
            todos={visibleInProcess}
            onDeleteTodo={this.deleteTodo}
            onEditTodo={this.handleOpenEditModal}
            onAddTodo={this.handleOpenAddModal} />

          <Panel
            title="On Review"
            todos={visibleOnReview}
            onDeleteTodo={this.deleteTodo}
            onEditTodo={this.handleOpenEditModal}
            onAddTodo={this.handleOpenAddModal} />

          <Panel
            title="Finished"
            todos={visibleFinished}
            onDeleteTodo={this.deleteTodo}
            onEditTodo={this.handleOpenEditModal}
            onAddTodo={this.handleOpenAddModal} />
        </div>

        <Modal
          isOpen={showModal}
          contentLabel="add/edit task"
          onRequestClose={this.handleCloseModal}
          className={styles.modal}
        >
          <Form 
            onCloseModal={this.handleCloseModal} 
            onAddTodo={this.addTodo} 
            list={activeList}
            action={modalAction}
            onEditTodo={this.editTodo}
            todo={activeTodo}/>
          <Button onClick={this.handleCloseModal} type="modalClose">
            <img src={closeIcon} alt="" className={styles.iconClose} />
          </Button>
        </Modal>

      </div>
    );
  }
}

export default App;

