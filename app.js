import express from "express"
import mongoose from "mongoose"
import {Schema, model} from "mongoose"


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

const user_schema = Schema({
    name: {
        type: String,
        require: true
    },
    nickname: {
        type: String,
        require: true
    },
    cel: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const user = model("user", user_schema)

const first_user = new user({
    name: "John",
    nickname: "jjatt",
    cel: "12345",
    password: "123"
})

try {
    await first_user.user.save()
} catch(error) {
    console.log(error);
}

app.listen(port, () => console.log(`Server on port: ${port}`))