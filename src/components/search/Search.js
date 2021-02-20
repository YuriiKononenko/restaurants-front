import React, {useEffect} from 'react'

const searchButtonStyles = {
    paddingTop: '.5rem',
}

const searchInputStyle = {
    marginTop: '100px',
    width: '1000px',
    height: '50px'
}

const SearchBar = () => (
    <div className="search-body">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="input-outlined"
            placeholder="Search a restaurant..."
            name="search"
            style={searchInputStyle}
        />
        <button style={searchButtonStyles} type="submit">Search</button>
    </div>
);

export default SearchBar;
