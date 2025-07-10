
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../Util/Spotify';

function App() {
  const [searchResults, setSearchResults ] = useState([
    {id: 1, name: 'Outlaw', artist:'War', album:'Outlaw', uri: 'spotify:track:6gHFPUFcJLzWGx4lenP6h2'},
    {id: 2, name: 'Pusherman', artist:'Curtis Mayfield', album:'Superfly', uri: 'spotify:track:6gBFPAFcJLzWGx4lenP6h2'},
    {id: 3, name: 'De Novo', artist:'Clarissa Connelly', album:'Tech Duinn', uri: 'spotify:track:6gBHPUFcJLzWGx4lenP6h2'}
  ]);

  const search = (term) => {
    Spotify.search(term).then(results => {
      setSearchResults(results); // Update state with API results
    });
  };

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {id: 4, name: 'The Seed', artist: 'The Roots', album: 'Phrenology', uri: 'spotify:track:6gBFPUFcJLzWGx4lenP6h2'},
    {id: 5, name: 'Electric Feel', artist: 'MGMT', album: 'Oracular Spectacular', uri: 'spotify:track:2g0HvlBrUUPmkyFy5I2r0N'}
  ]);

  function addTrack(track) {
    // check if a track already exists in playlist by its id
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return; // Already added
    };

    // Add a new track
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  };

  function removeTrack(track) {
    setPlaylistTracks(prevTracks =>
      prevTracks.filter(savedTrack => savedTrack.id !== track.id)
    );

  };

  function savePlaylist() {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });

    setPlaylistTracks([]);
    setPlaylistName("New Playlist");
  };


  return (
     <div >
        <h1>Ja<span>mmm</span>ing</h1>
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
        <SearchResults tracks={searchResults} onAdd={addTrack} />
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks} 
          onNameChange={setPlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}

        />
        </div>
      </div>
  );
}

export default App;
