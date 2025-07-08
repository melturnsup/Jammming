
import TrackList from '../TrackList/TrackList.js'

function SearchResults({ tracks, onAdd }) {
    
    return (
      <div className="SearchResults">
      <h2>Search Results</h2>
      <TrackList tracks={tracks} onAdd={onAdd} />
      </div>
  ); 
}

export default SearchResults;