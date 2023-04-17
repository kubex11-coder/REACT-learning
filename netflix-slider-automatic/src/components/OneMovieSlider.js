import "./OneMovieSlider.css"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { useState, useEffect } from "react"
import data from "../data"

const OneMovieSlider = () => {
    const [index, setIndex] = useState(0)

    return (
        <section className="all-movies">
            <div className="all-movies-content">
                {data.map((oneMovie) => {
                    const { id, image, title, age, tags, description } =
                        oneMovie

                    return (
                        <article key={id}>
                            <img src={image} alt="" />
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p>{tags}</p>
                            <p>{age}</p>
                        </article>
                    )
                })}
            </div>
            <button>
                <FaArrowAltCircleLeft />
            </button>
            <button>
                <FaArrowAltCircleRight />
            </button>
        </section>
    )
}

export default OneMovieSlider
