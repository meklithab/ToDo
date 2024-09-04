import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import route from "./routes/route.js"
import connectDB from "./db/connectDB.js";

dotenv.config()

const app = express()



const port = process.env.PORT;
const DB_URL = process.env.DB_URL

connectDB(DB_URL)

app.use(cors())
app.use(express.json())

app.use("/", route)

app.listen(port, () => `Server running on port ${port} 🔥`);