import React, {useEffect} from 'react'

const searchButtonStyles = {
    height: '50px'
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
            className="input-style"
            style={searchInputStyle}
        />
        <button style={searchButtonStyles} type="submit">Search</button>
    </div>
);

export default SearchBar;
