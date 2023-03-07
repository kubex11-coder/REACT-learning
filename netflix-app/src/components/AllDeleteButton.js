import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
    return (
        <button className="main-delete-button" onClick={props.deleteAllMovies}>
            Vymazat vše
        </button>
    )
}

export default AllDeleteButton
