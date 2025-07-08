
import Track from '../Track/Track.js'

function TrackList({ tracks, onAdd }) {
    

    return (
        <div className="TrackList">
        {tracks.map(track => (
            <Track key={track.id} track={track} onAdd={onAdd} />
        ))}
        </div>
    );
}

export default TrackList;