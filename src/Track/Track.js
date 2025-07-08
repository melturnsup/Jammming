

function Track({ track, onAdd }) {
    const handleAdd = () => {
        onAdd(track)
    }

    return (
        <div className="Track">
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
            <button onClick={handleAdd}>+</button>
        </div>
    );
}

export default Track;