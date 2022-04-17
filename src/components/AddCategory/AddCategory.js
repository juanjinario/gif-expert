import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddCategory.module.css';

const AddCategory = ({ setCategoriesList }) => {
  const [inputValue, setinputValue] = useState(' ');
  const handleInput = (e) => {
    setinputValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategoriesList(cats => [inputValue, ...cats]);
      setinputValue('');
    }
  }
  return (
    <form onSubmit={ handleSubmit }>
      <input 
        className={styles['input-txt']} 
        type="text" 
        value={ inputValue }
        onChange={ handleInput }  
      >
      </input>
    </form>
  ); 
}

AddCategory.propTypes = {
  setCategoriesList: PropTypes.func.isRequired,
};

export default AddCategory;
