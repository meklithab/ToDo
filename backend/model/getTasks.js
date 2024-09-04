import taskModel from "./tasksSchema.js"

const getTasks = async () => {
    try {

        const result = await taskModel.find()
        return result


    } catch (error) {

        console.log("Error:" + error)

    }
}

export { getTasks }