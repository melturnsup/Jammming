
import TrackList from '../TrackList/TrackList.js'

function SearchResults({ tracks }) {
    
    return (
      <div className="SearchResults">
      <h2>Search Results</h2>
      <TrackList tracks={tracks} />
      </div>
  ); 
}

export default SearchResults;