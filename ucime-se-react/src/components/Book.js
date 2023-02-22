import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
    return (
        <div className="one-book">
            <img src={props.image} alt={props.title} />
            <h2 className="main-heading">{props.title}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus praesentium neque sint modi harum dolores quibusdam
                blanditiis suscipit tempora quos? Aspernatur, placeat fuga
                facilis quas culpa nam tempora harum! Totam.
            </p>
            <OrderButton />
        </div>
    )
}

export default Book

// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
