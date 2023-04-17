import "./OneMovieSlider.css"
import data from "../data"
import { useState } from "react"
import { FaArrowCircleLeft } from "react-icons/fa"
import { FaArrowCircleRight } from "react-icons/fa"

const OneMovieSlider = () => {
    const [index, setIndex] = useState(0)
    const { image, title, description } = data[index]

    const nextMovie = () => {
        if (index === data.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prevMovie = () => {
        if (index === 0) {
            setIndex(3)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className="one-movie">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={prevMovie}>
                <FaArrowCircleLeft />
            </button>
            <button onClick={nextMovie}>
                <FaArrowCircleRight />
            </button>
        </div>
    )
}

export default OneMovieSlider
