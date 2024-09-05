import { useEffect, useState } from "react"
import axios from "axios"

import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";

import "../style/index.css"



export default function Todo() {

    const [isEmpty, setEmpty] = useState(true)
    const [task, setTask] = useState("")
    const [storedTasks, setStoredTasks] = useState([])
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState()


    useEffect(() => {
        axios
            .get("http://localhost:8000/tasks")
            .then(res => {
                console.log(res)
                setStoredTasks(res.data)
                console.log("Connected")
                setEmpty(res.data.length === 0)
            })
            .catch(err => console.error(err));
    }, [])



    const handleSubmit = () => {

        axios.post("http://localhost:8000/tasks", { data: task })
            .catch(err => console.error(err))


    }

    const handleEdit = (id, text) => {

        setEdit(true)
        setTask(text)
        setEditId(id)



    }
    const handleDelete = (id) => {

        console.log(id)

        try {
            axios.delete(`http://localhost:8000/tasks/${id}`)
                .catch(err => console.error(err))

            setStoredTasks(storedTasks.filter(t => t._id !== id))
            setEmpty(storedTasks.length - 1 === 0)
        } catch (error) {

            console.log("Handle Delete Error:", error)

        }


    }


    function handleDone() {
        setEdit(false)
        console.log(task)
        axios
            .put(`http://localhost:8000/tasks/${editId}`, { data: task })
            .catch(err => console.error(err))

        setStoredTasks(storedTasks.map(item =>
            item._id === editId ? { ...item, text: task } : item
        ));



    }




    return (
        <div className="container">
            <h1>TODO</h1>

            <form onSubmit={handleSubmit} >
                <input type="text" value={task} placeholder="Enter a task..." onChange={(e) => setTask(e.target.value)} className="search" />
                {!edit ? (<input type="submit" value={"ADD"} className="submit" />) : (<></>)}
                {edit ? (<button onClick={handleDone} className="submit">EDIT</button>) : (<></>)}

            </form>



            {isEmpty ? (

                <div>
                    <p>No tasks added.</p>
                </div>
            ) : (


                <div>

                    {storedTasks.map((t, index) => (
                        <div key={index} className="tasks">


                            <div className="task-name">
                                 {t.text}
                            </div >
                            <div className="task-button">
                                <button onClick={() => { handleEdit(t._id, t.text) }} className="action-buttons"><HiOutlinePencilAlt /></button>
                                <button onClick={() => { handleDelete(t._id) }} className="action-buttons"><HiOutlineTrash /></button></div>

                        </div>

                    ))}

                </div >

            )}


        </div>
    )
}