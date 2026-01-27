import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import cors from 'cors';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import { connectToSocket } from './controllers/socketManager.js';
import userRoutes from './routes/users.routes.js';

dotenv.config();


const app = express();
const server = http.createServer(app);
const io = connectToSocket(server);

app.use(cors());
app.use(express.json({limit:'40kb'}));
app.use(express.urlencoded({limit:'40kb',extended:true}));

app.use('/api/v1/users',userRoutes);

app.get('/',(req,res)=>{
    return res.send("heyybabe")
});

app.get('/api/v1/users/login')

const port = process.env.PORT;
const start = async() =>{
    try {
        const connectionDB = await mongoose.connect(process.env.DB_URI);
        
        
        console.log("MongoDB connection to DB host:",connectionDB.connection.host)
    } catch (error) {
        console.log("Error while connecting to MongoDB:",error);
    }
    server.listen(port,()=>{
    console.log(`app is running at port ${port}`)
  });
}

start();