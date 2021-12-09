import React, { useState } from 'react';
// import { useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories})=> {

  const [inputValue, setInputValue] = useState('');

  const handleInputchange = (e) =>{
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(inputValue.trim().length > 1){
      setCategories( cats => [inputValue, ...cats]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
            type="text"
            value={ inputValue }
            onChange={handleInputchange}/>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}