import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('New Categorie');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((categories) => {
                if (categories.find((oldCategory) => oldCategory === inputValue) === undefined) {
                    return [inputValue];
                } else {
                    alert('this categorie is already in the list');
                    return categories;
                }
            });
        } else {
            alert('The length of category must be at least 3 characters');
            return;
        }

        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2> Add Category</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(event) => {
                    handleInputChange(event);
                }}
            ></input>
        </form>
    );
};
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
