import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
    return (
        <button className="movieDeleteButton" onClick={props.deleteMovie}>
            Vymazat film
        </button>
    )
}

export default MovieDeleteButton
