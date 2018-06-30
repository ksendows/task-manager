import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import Button from '../shared/button';
import Panel from '../panel';
import Footer from '../footer';
import Header from '../header';
import Form from "../form";
import { getVisibleTodos } from "../../utils/selectors";
import closeIcon from "../../icons/close.svg";
import data from '../../data.json';
import styles from './styles.css';

Modal.setAppElement('#root');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: data.todos,
      search: '',
      priorityFilter: 'all',
      showModal: false,
      modalAction: '',
      activeTodo: {},
      activeList: 'todo',
      showMap: false
    };
  }

  handleOpenAddModal = e => {
    const list = e.target.parentNode.firstChild.firstChild.textContent;
    const activeList = list === "+" ? "To do" : list;
    return (this.setState({ 
      activeList,
      showModal: true,
      modalAction: "add" }))
  };

  handleCloseModal = () => this.setState({ 
    showModal: false,
    showMap: false
   });

  handleOpenEditModal = (id) => this.setState(prevState => ({
    showModal: true,
    modalAction: "edit",
    activeTodo: prevState.todos.filter(todo => todo.id === id)[0]
  }));

  addTodo = (todo) => {
    this.setState(prevState => ({
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

  handleShowMap = () => this.setState({ showMap: true});

  handlePriorityFilterChange = priority => this.setState({ priorityFilter: priority });

  handleSearchChange = str => this.setState({ search: str });

  render() {

    const { showModal, priorityFilter, search, activeTodo, modalAction, activeList, showMap  } = this.state;

    const visibleTodos = getVisibleTodos(this.state, "To do");
    const visibleOnReview = getVisibleTodos(this.state, "On Review");
    const visibleInProcess = getVisibleTodos(this.state, "In Process");
    const visibleFinished = getVisibleTodos(this.state, "Finished");

    return (
      <Fragment>
        <Header 
          search={search}
          onSearchChange={this.handleSearchChange}
          changePriorityFilter={this.handlePriorityFilterChange}
          currentFilter={priorityFilter} 
          onAddTodo={this.handleOpenAddModal}
          />

        <main className={styles.container}>

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
        </main>

        <Footer onShowMap={this.handleShowMap}/>

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

        <Modal
          isOpen={showMap}
          contentLabel="map"
          onRequestClose={this.handleCloseModal}
          className={styles.modal_map}
        >
          <iframe 
            title="map" 
            className={styles.map} 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5724497654764!2d30.463088415507904!3d50.449063979475156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce8314fdfde3%3A0xcaff87f52cccc2ec!2z0LLRg9C70LjRhtGPINCf0L7Qu9GW0YLQtdGF0L3RltGH0L3QsCwgNiwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1524242063291"
            allowFullScreen />
          <Button onClick={this.handleCloseModal} type="modalClose">
            <img src={closeIcon} alt="" className={styles.iconClose} />
          </Button>
        </Modal>

      </Fragment>
    );
  }
}

export default App;

