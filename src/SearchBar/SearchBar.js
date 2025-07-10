import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    };

    const search = () => {
        onSearch(term); // calls the function passed from App
    };

    return (
    <>
        <div className="SearchBar">
            <input placeholder="Enter A Song Title" onChange={handleTermChange} />
            <button className="SearchButton" onClick={search}>
                SEARCH
            </button>
        </div>
    </>
  ); 
}

export default SearchBar;