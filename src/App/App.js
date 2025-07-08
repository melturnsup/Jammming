
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist';


function App() {
  const [searchResults, ] = useState([
    {id: 1, name: 'Outlaw', artist:'War', album:'Outlaw'},
    {id: 2, name: 'Pusherman', artist:'Curtis Mayfield', album:'Superfly'},
    {id: 3, name: 'De Novo', artist:'Clarissa Connelly', album:'Tech Duinn'}
  ]);

  const [playlistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {id: 4, name: 'The Seed', artist: 'The Roots', album: 'Phrenology'},
    {id: 5, name: 'Electric Feel', artist: 'MGMT', album: 'Oracular Spectacular'}
  ]);

  function addTrack(track) {
    // check if a track already exists in playlist by its id
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return; // Already added
    }

    // Add a new track
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  }

  function removeTrack(track) {
    setPlaylistTracks(prevTracks =>
      prevTracks.filter(savedTrack => savedTrack.id !== track.id)
    )
  }

  return (
     <div >
        <h1>Ja<span>mmm</span>ing</h1>
      <SearchBar />
        <div className="App-playlist">
        <SearchResults tracks={searchResults} onAdd={addTrack} />
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks} 
          onRemove={removeTrack}
        />
        </div>
      </div>
  );
}

export default App;
