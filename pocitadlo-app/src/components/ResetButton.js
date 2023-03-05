import "./ResetButton.css"

const ResetButton = (props) => {
    return (
        <button className="btn" onClick={props.resetValue}>
            Zresetuj hodnotu
        </button>
    )
}

export default ResetButton
