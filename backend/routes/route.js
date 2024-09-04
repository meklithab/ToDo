import express from "express"
import addController from "../controllers/addController.js";
import getController from "../controllers/getController.js";
import updateController from "../controllers/updateContoller.js";
import deleteContoller from "../controllers/deleteController.js"

const route = express.Router()


route.get("/tasks", getController)
route.post("/tasks", addController)
route.put("/tasks/:id", updateController)
route.delete("/tasks/:id", deleteContoller)

export default route