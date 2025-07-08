
import TrackList from '../TrackList/TrackList';

function Playlist({ playlistName, playlistTracks, onRemove }) {

 
    return (
    <div className="Playlist">
      <h2>{playlistName}</h2>
      <TrackList
         playlistTracks={playlistTracks}
         onRemove={onRemove}
       />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist; 