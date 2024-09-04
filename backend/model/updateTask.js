import taskModel from "./tasksSchema.js"
const updateTask = async ({ id }, { data }) => {

    try {

        const result = await taskModel.updateOne({ _id: id, text: data })
        console.log("Edited task:", result)

    } catch (error) {

        console.log("Unable to update task with ID:", id)

    }


}

export default updateTask