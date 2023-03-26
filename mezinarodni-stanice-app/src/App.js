const App = () => {
    const URL = "http://api.open-notify.org/iss-now.json"

    const getCoordinates = async function () {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data.iss_position.longitude)
        console.log(data.iss_position.latitude)
    }

    getCoordinates()

    return <h1>API</h1>
}

export default App
