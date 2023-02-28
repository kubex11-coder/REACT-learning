import "./AllTasks.css"
import data from "../data"
import { useState } from "react"

const AllTasks = () => {
    const [myTask, setMyTask] = useState(data)

    const tasksHandler = (idecko) => {
        const filteredTasks = myTask.filter((oneTask) => {
            return oneTask.id !== idecko
        })

        setMyTask(filteredTasks)
    }

    const allDeleteHandler = () => {
        setMyTask([])
    }

    return (
        <div>
            {myTask.map((oneTask) => {
                const { id, name } = oneTask

                return (
                    <div className="one-task" key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => tasksHandler(id)}>
                            Vymazat
                        </button>
                    </div>
                )
            })}
            <button className="main-button" onClick={allDeleteHandler}>
                Vše vymazat
            </button>
        </div>
    )
}

export default AllTasks
