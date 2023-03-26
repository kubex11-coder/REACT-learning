import { useState, useEffect } from "react"

const App = () => {
    const URL = "http://api.open-notify.org/iss-now.json"
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [urlMap, setUrlMap] = useState("")

    const getCoordinates = async function () {
        const response = await fetch(URL)
        const data = await response.json()

        setLatitude(data.iss_position.latitude)
        setLongitude(data.iss_position.longitude)
        const iss_long = data.iss_position.longitude
        const iss_lat = data.iss_position.latitude
        setUrlMap(`https://mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=11`)
    }

    useEffect(() => {
        getCoordinates()
    }, [])

    return (
        <div>
            <h1>API</h1>
            <h2>Zeměpisná šířka</h2>
            <p>{latitude}</p>
            <h2>Zeměpisná délka</h2>
            <p>{longitude}</p>
            <a href={urlMap} target="_blank">
                Pozice ISSv mapách
            </a>
        </div>
    )
}

export default App
