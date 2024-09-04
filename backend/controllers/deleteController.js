import { deleteTask } from "../model/deleteTasks.js";

const deleteController = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        await deleteTask({ id });
    } catch (error) {
    }
}

export default deleteController;
