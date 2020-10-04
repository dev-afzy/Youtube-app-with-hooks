import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="feild">
          <label htmlFor="search">Video Search</label>
          <input
            type="text"
            name="search"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
