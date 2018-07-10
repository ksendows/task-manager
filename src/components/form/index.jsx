/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { v4 } from 'uuid';
import PropertySelect from "../propertySelect";
import { formatDateForInput } from '../../utils/format';
import validateFields from '../../utils/validators';
import Button from '../shared/button/';
import clockIcon from '../../icons/clock.svg';
import styles from './styles.css';

const date = new Date();
const defaultDueDate = date.setDate(date.getDate(date) + 1);

const INITIAL_STATE = {
  task: '',
  dueDate: formatDateForInput(new Date(JSON.parse(JSON.stringify(defaultDueDate)))),
  status: "To do",
  editableStatus: false,
  priority: "normal",
  editablePriority: false,
  fullfilment: 0,
  isValid: {
    task: false,
    fullfilment: true,
    dueDate: true
  }
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
      creationDate: PropTypes.string,
      fullfilment: PropTypes.string
    })
  };

  static defaultProps = {
    todo: INITIAL_STATE
  };

  constructor(props) {
    super(props);

    this.textArea = React.createRef();
    this.focusTextArea = this.focusTextArea.bind(this);

    const {id, task, dueDate, creationDate, status, priority, fullfilment} = props.todo;
    
    if (props.action === "edit") {
      this.state = {
        id,
        task,
        dueDate: formatDateForInput(new Date(JSON.parse(JSON.stringify(dueDate)))),
        creationDate,
        status,
        editableStatus: false,
        priority,
        editablePriority: false,
        fullfilment: Number.parseInt(fullfilment, 10),
        isValid: {
          task: true,
          fullfilment: true,
          dueDate: true
        }
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

  isValidationPassed() {
    const { task, fullfilment, dueDate } = this.state.isValid;
    return task && fullfilment && dueDate;
  }    

  handleAddSubmit = e => {
    e.preventDefault();
    if (!this.isValidationPassed()) {
      return;
    }
    const todo = {
      id: v4(),
      task: this.state.task,
      dueDate: JSON.parse(JSON.stringify(new Date(this.state.dueDate))),
      creationDate: JSON.parse(JSON.stringify(new Date())),
      status: this.state.status,
      priority: this.state.priority,
      fullfilment: `${this.state.fullfilment}%`
    }
    this.props.onAddTodo(todo);

    this.setState({ ...INITIAL_STATE });
    this.handleCloseModal();
  };

  handleEditSubmit = e => {
    e.preventDefault();
    if (!this.isValidationPassed()) {
      return;
    }
    const updatedTodo = {
      id: this.state.id,
      task: this.state.task,
      dueDate: JSON.parse(JSON.stringify(new Date(this.state.dueDate))),
      creationDate: JSON.parse(JSON.stringify(new Date(this.state.creationDate))),
      status: this.state.status,
      priority: this.state.priority,
      fullfilment: `${this.state.fullfilment}%`
    }
    this.props.onEditTodo(updatedTodo);

    this.setState({ ...INITIAL_STATE });
    this.handleCloseModal();
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ 
      [name]: value,
      isValid: {
        ...this.state.isValid,
        [name]: validateFields(name, value)
      }
     });
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

    const buttonType = (!this.isValidationPassed()) ? "buttonDisabled" : "submit";

    return (
      <form className={styles.form} onSubmit={submitFunc}>
        <textarea 
          name="task" 
          placeholder="Todo description" 
          rows = "6"
          ref={this.textArea}
          value={this.state.task} 
          onChange={this.handleInputChange}
          className={styles.todo} />

        <div className={styles.columns_container}>
          <div className={styles.column}>
            <PropertySelect
              property="status"
              onRadioChange={this.onRadioChange}
              value={this.state.status} />
          </div>

          <div className={styles.column}>
            <PropertySelect
              property="priority"
              onRadioChange={this.onRadioChange}
              value={this.state.priority} />
          </div>
        </div>

        <div className={styles.columns_container}>
          <div className={styles.column}>
              <label htmlFor="dueDate" className={styles.date_container}>
                <img src={clockIcon} alt="" className={styles.clock} />
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={this.state.dueDate}
                  onChange={this.handleInputChange}
                  className={styles.date_input} />
              </label>
          </div>

          <div className={styles.column}>
            <label htmlFor="fullfilment" className={styles.fullfilment}>fullfilment (%):
              <input
                    type="number"
                    id="fullfilment"
                    name="fullfilment"
                    value={this.state.fullfilment}
                    onChange={this.handleInputChange}
                    className={styles.fullfilment_input}
                    min="0" max="100"
                    step="1" />
            </label>
          </div>
        </div>

        <div className={styles.columns_container}>
          <div className={styles.column}>
            <Button type={buttonType} onClick={submitFunc}>{submitTitle}</Button>
          </div>
          <div className={styles.column}>
            <Button onClick={this.handleCloseModal}>Cancel</Button>
          </div>
        </div>

      </form>
      );
    }
  }


