import "./Example.css"
import { useState } from "react"

const Example = () => {
    const [title, setTitle] = useState("Můj první title")

    const buttonHandler = () => {
        setTitle("Nový title")
    }

    const buttonHandler2 = () => {
        setTitle("Další nový mdfk title")
    }

    const deleteAll = () => {
        setTitle("")
    }

    return (
        <div className="text-button-changer">
            <h2>{title}</h2>
            <button onClick={buttonHandler}>Změnit title</button>
            <button onClick={buttonHandler2}>Opět změnit title</button>
            <button onClick={deleteAll}>Smaže vše</button>
        </div>
    )
}

export default Example
