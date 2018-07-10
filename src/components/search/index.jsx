import React from 'react';
import PropTypes from 'prop-types';
import Input from '../shared/input/';
import styles from './styles.css';

const Search = ({ search, onSearchChange }) => {

  const handleChange = e => {
    onSearchChange(e.target.value);
  };

    return (
      <form className={styles.container}>
        <Input
          name="text"
          value={search}
          onChange={handleChange}
          placeholder="Search by task..."
        />
      </form>
    );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
