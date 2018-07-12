import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo';
import styles from './styles.css';

const List = ({ data, name, onDropTodo, ...props }) => {
  
  const handleDrop = e => {
    const id = e.dataTransfer.getData('text');
    onDropTodo(id, name);
  }

  const allowDrop = e => e.preventDefault();
  
  return (
    <div className={styles.container} onDrop={handleDrop} onDragOver={allowDrop}>
      <ul className={styles.list}>
        {data.map(item => (
          <li key={item.id} className={styles.item}>
            <Todo {...item} {...props} />
          </li>
        ))}
      </ul>
    </div>
  );
};


List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  name: PropTypes.string.isRequired,
  onDropTodo: PropTypes.func.isRequired
};

export default List;
