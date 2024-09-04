import taskModel from "./tasksSchema.js";

const addTask = async ({value}) => {

    try {

        const t1 = new taskModel({
            text: value
        })

        const result = await t1.save()
        console.log("This task has been added:" + result)
    } catch (error) {

        console.log("Error" + error)

    }
}

export { addTask }