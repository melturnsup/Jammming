import './App.css';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js'


function App() {
  const [searchResults, ] = useState([
    {id:1, name: 'Outlaw', artist:'War', album:'Outlaw'},
    {id:1, name: 'Pusherman', artist:'Curtis Mayfield', album:'Superfly'},
    {id:1, name: 'De Novo', artist:'Clarissa Connelly', album:'Tech Duinn'}
  ]);

  return (
    <>
     <div className="App">
        <h1>Ja<highlight>mmm</highlight>ing</h1>
      <SearchBar />
      <SearchResults tracks={searchResults}/>
      </div>
    </> 
  );

}

export default App;
