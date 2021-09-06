import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {

    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value.toLowerCase());
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="search-field">
                <input className="search-bar" type="text" onChange={onInputChange} />
                <button className="search-btn">Search</button>
            </div>
        </form>
    );
}


export default SearchBar;