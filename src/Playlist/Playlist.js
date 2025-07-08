
import TrackList from '../TrackList/TrackList';

function Playlist({ name, tracks }) {

 
    return (
    <div className="Playlist">
      <input defaultValue={name} />
      <TrackList tracks={tracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;