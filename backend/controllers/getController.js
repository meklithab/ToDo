import { getTasks } from "../model/getTasks.js"

const getController = async(req, res) => {

    const result = await getTasks()
    res.json(result)


}

export default getController