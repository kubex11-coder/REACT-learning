import "./Movie.css"
import MovieDeleteButton from "./MovieDeleteButton"
import data from "../data"
import AllDeleteButton from "./AllDeleteButton"
import ReloadMovieButton from "./ReloadMovieButton"
import { useState } from "react"

const Movie = () => {
    const [movieList, setMovieList] = useState(data)

    const deleteOneMovie = (idecko) => {
        const filteredMovies = movieList.filter((oneMovie) => {
            return idecko !== oneMovie.id
        })

        setMovieList(filteredMovies)
    }

    const deleteAllMovies = () => {
        setMovieList([])
    }

    const reloadAllMovies = () => {
        setMovieList(data)
    }
    return (
        <section>
            <div className="all-movies">
                {movieList.map((oneMovie) => {
                    const { id, image, title, age, tags, description } =
                        oneMovie

                    return (
                        <div className="one-movie" key={id}>
                            <img src={image} alt="" />
                            <h2>{title}</h2>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                            <MovieDeleteButton
                                deleteMovie={() => deleteOneMovie(id)}
                            ></MovieDeleteButton>
                        </div>
                    )
                })}
            </div>
            <div className="button-box">
                <AllDeleteButton
                    deleteAllMovies={deleteAllMovies}
                ></AllDeleteButton>
                <ReloadMovieButton
                    reloadAllMovies={reloadAllMovies}
                ></ReloadMovieButton>
            </div>
        </section>
    )
}

export default Movie
