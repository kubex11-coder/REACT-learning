import "./Question.css"
import { useState } from "react"

const Question = ({ title, info }) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <section>
                <h2>{title}</h2>
                <button onClick={() => setShow(!show)}>Odpověď</button>
            </section>
            {show && <p>{info}</p>}
        </div>
    )
}

export default Question
