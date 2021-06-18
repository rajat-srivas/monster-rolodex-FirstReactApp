import React from 'react'
import './search-box.style.css';


//functional component dont have access to state & lifecylce methods
//destructured the props object to the individual object it had inside it, placeholder and handleChange method in this case

export const SearchBox = ({ placeholder, handleChange }) => (
    <input className="app_input" onChange={handleChange}
        type="search" placeholder={placeholder} />
);

