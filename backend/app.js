import express from "express";
import {createServer} from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import {connectToSocket} from './src/controllers/socketManager.js'
import userRoutes from "./src/routes/users.routes.js"
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.Port || 8000)

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:"true"}))
app.use("/api/v1/user", userRoutes)


const start = async ()=>{
    
    const connectdb = await mongoose.connect("MONGO_URL")
    console.log(`Mongo Connected DB Host:: ${connectdb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("LISTEN ON PORT 8000")
    })
}
start();
