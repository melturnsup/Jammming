
import TrackList from '../TrackList/TrackList';

function Playlist({ playlistName, onNameChange, playlistTracks, onRemove, onSave }) {

  const handleChange = (e) => {
    onNameChange(e.target.value);
  };
 
    return (
    <div className="Playlist">
      <input
        value={playlistName}
        onChange={handleChange}
      />
      <TrackList
         tracks={playlistTracks}
         onRemove={onRemove}
       />
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist; 