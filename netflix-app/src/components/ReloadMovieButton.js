import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
    return (
        <button className="main-reload-button" onClick={props.reloadAllMovies}>
            Znovu načti data
        </button>
    )
}

export default ReloadMovieButton
