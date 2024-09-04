import { addTask } from "../model/addTask.js"

const addController = async (req, res) => {

    const { data } = req.body
    console.log(data)
    try {
        await addTask({ value: data })

    } catch (error) {
          
    }

}

export default addController