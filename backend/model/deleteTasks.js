import taskModel from "./tasksSchema.js";

const deleteTask = async ({ id }) => {
    try {
        const result = await taskModel.findByIdAndDelete(id);

        if (result) {
            console.log("Document deleted:", result);
        } else {
            console.log("No document found with that ID:", id);
        }
    } catch (error) {
        console.error("Error deleting by id:", error);  
    }
}

export { deleteTask };
