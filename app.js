import express from "express"
import mongoose from "mongoose"

const app = express()
const port = process.env.PORT 

app.use(express.json())

const userdb = process.env.USERDB 
const passdb = process.env.PASSDB 
const hostdb = process.env.HOSTDB
const namedb = process.env.NAMEDB

const url = `mongodb+srv://${userdb}:${passdb}@${hostdb}/${namedb}`

try {
    await mongoose.connect(url)
    console.log("Database connected");
} catch (error) {
    console.log("Error database", error);
}

app.listen(port, () => console.log(`Server on port: ${port}`))