import updateTask from "../model/updateTask.js"
const updateController = async (req, res) => {


  const { id } = req.params
  const { data } = req.body
  console.log("Data", id, data)

  try {

    await updateTask({id},{data})


  } catch (error) {

    console.log("Error updating.")
  }



}

export default updateController