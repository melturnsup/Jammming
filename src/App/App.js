import './App.css';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist';


function App() {
  const [searchResults, ] = useState([
    {id:1, name: 'Outlaw', artist:'War', album:'Outlaw'},
    {id:2, name: 'Pusherman', artist:'Curtis Mayfield', album:'Superfly'},
    {id:3, name: 'De Novo', artist:'Clarissa Connelly', album:'Tech Duinn'}
  ]);

  const [playlistName] = useState('My Playlist');
  const [playlistTracks] = useState([
    {id: 4, name: 'The Seed', artist: 'The Roots', album: 'Phrenology'},
    {id: 5, name: 'Electric Feel', artist: 'MGMT', album: 'Oracular Spectacular'}
  ]);

  return (
     <div className="App">
        <h1>Ja<span>mmm</span>ing</h1>
      <SearchBar />
        <div className="App-playlist">
        <SearchResults tracks={searchResults}/>
        <Playlist name={playlistName} tracks={playlistTracks} />
        </div>
      </div>
  );
}

export default App;
