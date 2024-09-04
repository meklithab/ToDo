import mongoose from "mongoose";

const tasKSchema = new mongoose.Schema({
    text: { type: String, requied: true },
    date: { type: Date, default: Date.now }
})

const taskModel = mongoose.model("Todo", tasKSchema)

export default taskModel