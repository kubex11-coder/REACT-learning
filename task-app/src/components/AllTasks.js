import "./AllTasks.css"
import data from "../data"
import { useState } from "react"

const AllTasks = () => {
    const [myData, setMyData] = useState(data)

    const deleteHandler = (idecko) => {
        const filteredTasks = myData.filter((oneData) => {
            return idecko !== oneData.id
        })

        setMyData(filteredTasks)
    }

    const deleteAllHandler = () => {
        setMyData([])
    }

    return (
        <div>
            {myData.map((oneData) => {
                const { id, name } = oneData

                return (
                    <div className="one-task" key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => deleteHandler(id)}>
                            Vymazat
                        </button>
                    </div>
                )
            })}
            <button className="main-button" onClick={deleteAllHandler}>
                Vymazat vše
            </button>
        </div>
    )
}

export default AllTasks
