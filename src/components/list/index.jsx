import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo';
import styles from './styles.css';

const List = ({ data, ...props }) => (
  <div className={styles.container}>  
    <ul className={styles.list}>
      {data.map(item => (
        <li key={item.id} className={styles.item}>
            <Todo {...item} {...props} />
        </li>
      ))}
    </ul>
  </div>
);


List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired
};

export default List;
