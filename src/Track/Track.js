

function Track({ track, onAdd, onRemove }) {
    const handleAdd = () => onAdd && onAdd(track);
    const handleRemove = () => onRemove && onRemove(track);

    return (
        <div className="Track">
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
            {onAdd && <button onClick={handleAdd}>+</button>}
            {onRemove && <button onClick={handleRemove}>-</button>}
        </div>
    );
}

export default Track;