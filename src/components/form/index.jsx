import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { v4 } from 'uuid';
import PropertySelect from "../propertySelect";
import { formatDateForInput } from '../../utils/format';
import Button from '../shared/button/';
import clockIcon from '../../icons/clock.svg';
import styles from './styles.css';

let dueDate = new Date();
dueDate = dueDate.setDate(dueDate.getDate() + 1);
dueDate = new Date(JSON.parse(JSON.stringify(dueDate)));

const INITIAL_STATE = {
  task: '',
  dueDate: formatDateForInput(dueDate),
  status: "To do",
  editableStatus: false,
  priority: "low",
  editablePriority: false,
};

export default class Form extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    onEditTodo: PropTypes.func.isRequired,
    list: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    todo: PropTypes.shape({
      id: PropTypes.string,
      task: PropTypes.string,
      status: PropTypes.string,
      priority: PropTypes.string,
      dueDate: PropTypes.string,
    })
  };

  static defaultProps = {
    todo: INITIAL_STATE
  };

  constructor(props) {
    super(props);

    this.textArea = React.createRef();
    this.focusTextArea = this.focusTextArea.bind(this);

    if (props.action === "edit") {
      this.state = {
        id: props.todo.id,
        task: props.todo.task,
        dueDate: formatDateForInput(new Date(JSON.parse(JSON.stringify(props.todo.dueDate)))),
        status: props.todo.status,
        editableStatus: false,
        priority: props.todo.priority,
        editablePriority: false,
      }
      return;
    }
    this.state = { ...INITIAL_STATE };
    if (props.list) this.state.status = props.list;
  };

  componentDidMount() {
    this.focusTextArea();
  }

  onRadioChange = (property, value) => {
    this.setState({ [property]: value });
  }

  focusTextArea() {
    this.textArea.current.focus();
  }

  handleAddSubmit = e => {
    e.preventDefault();
    if (this.state.task === '') {
      return;
    }
    const todo = {
      id: v4(),
      task: this.state.task,
      dueDate: this.state.dueDate,
      status: this.state.status,
      priority: this.state.priority
    }
    this.props.onAddTodo(todo);

    this.setState({ ...INITIAL_STATE });
    this.handleCloseModal();
  };

  handleEditSubmit = e => {
    e.preventDefault();
    if (this.state.task === '') {
      return;
    }
    const updatedTodo = {
      id: this.state.id,
      task: this.state.task,
      dueDate: this.state.dueDate,
      status: this.state.status,
      priority: this.state.priority
    }
    this.props.onEditTodo(updatedTodo);

    this.setState({ ...INITIAL_STATE });
    this.handleCloseModal();
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleCloseModal = () => this.props.onCloseModal();
  

  renderRadioInput = (name, value) => (
      <label htmlFor={value}>
        <input
          type="radio"
          name={name}
          id={value}
          value={value}
          checked={this.state[name] === status}
          onChange={this.handleRadioChange} />
        {value}
      </label >
    );

  render() {
    let submitTitle;
    let submitFunc;
    if (this.props.action === "add") {
      submitTitle = "Add a task";
      submitFunc = this.handleAddSubmit;
    } else if (this.props.action === "edit") {
      submitTitle = "Edit task";
      submitFunc = this.handleEditSubmit;      
    }

    return (
      <form className={styles.form} onSubmit={submitFunc}>
        <textarea 
          name="task" 
          placeholder="Todo description" 
          rows = "5"
          ref={this.textArea}
          value={this.state.task} 
          onChange={this.handleInputChange}
          className={styles.form_text} />

        <div className={styles.columns_container}>
          <PropertySelect
            property="status"
            onRadioChange={this.onRadioChange}
            value={this.state.status} />
          <PropertySelect
            property="priority"
            onRadioChange={this.onRadioChange}
            value={this.state.priority} />
        </div>

        <div className={styles.date_container}>
          <img src={clockIcon} alt="" className={styles.clock} />
          <input
            type="date"
            name="dueDate"
            value={this.state.dueDate}
            onChange={this.handleInputChange}
            className={styles.date_input} />
        </div>

        <div className={styles.actions}>
          <Button type="submit" onClick={submitFunc}>{submitTitle}</Button>
          <Button onClick={this.handleCloseModal}>Cancel</Button>
        </div>
      </form>
      );
    }
  }


