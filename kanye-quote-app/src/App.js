import { useState, useEffect } from "react"

const App = () => {
    const [quote, setQuote] = useState("výchozí text")
    const url = "https://api.kanye.rest"

    const getQuote = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setQuote(data.quote)
    }

    useEffect(() => {
        getQuote()
    }, [])

    return (
        <div>
            <h1>{quote}</h1>
        </div>
    )
}

export default App
