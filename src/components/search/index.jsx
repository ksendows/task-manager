import React from 'react';
import PropTypes from 'prop-types';
import Input from '../shared/input/';
import styles from './styles.css';

const Search = ({ search, onSearchChange }) => {

  const handleChange = e => {
    onSearchChange(e.target.value);
  };

    return (
      <form className={styles.search}>
        <Input
          name="text"
          value={search}
          onChange={handleChange}
          placeholder="Search by task..."
          className={styles.search_input}
        />
      </form>
    );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
