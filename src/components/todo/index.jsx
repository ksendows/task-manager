import React from 'react';
import PropTypes from 'prop-types';
import Button from "../shared/button";
import { formatDate } from '../../utils/format';
import clockIcon from '../../icons/clock.svg';
import deleteIcon from '../../icons/delete.svg';
import styles from './styles.css';


const Todo = ({ id, task, dueDate, priority, fullfilment, onDeleteTodo, onEditTodo }) => {
  
  const date = new Date(JSON.parse(JSON.stringify(dueDate)));
  const pastdueClass = date > new Date() ? styles.date : styles.date_pastdue;
  const formatedDate = formatDate(date);

  let priorityClass;
  switch (priority) {
    case "low":
      priorityClass = styles.priority_low;
      break;
    case "normal":
      priorityClass = styles.priority_normal;
      break;
    case "high":
      priorityClass = styles.priority_high;
      break;
    default:
      break;
  }

  const handleDelete = e => {
    onDeleteTodo(id);
    e.stopPropagation();
  }

  const handleEdit = () => onEditTodo(id);

  const fullfillmentStyleWidth = {
    width: fullfilment
  };

  return (
    <div className={styles.todo} onClick={handleEdit} role="presentation">
      <div className={priorityClass} />
      <p className={styles.text}>{task}</p>
      <div className={styles.info}>
        <div className={pastdueClass}>
          <img src={clockIcon} alt="" className={styles.clock} />
          <span dateTime={date}>{formatedDate}</span>
        </div>
        <div className={styles.fullfilment_container}>
          <div className={styles.fullfilment} style={fullfillmentStyleWidth} />
          <div className={styles.fullfilment_title}>{fullfilment}</div>
        </div>
        <Button onClick={handleDelete} type="icon" src={deleteIcon} />
      </div>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['low', 'normal', 'high']).isRequired,
  fullfilment: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired
};

export default Todo;


