import express from 'express';
import http from 'http';
import cors from 'cors';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import { connectToSocket } from './controllers/socketManager.js';
import userRoutes from './routes/users.routes.js';

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

const start = async() =>{
    try {
        const connectionDB = await mongoose.connect("mongodb+srv://aryanshrivastav7374:PoojaCluster0@cluster0.k8rfecs.mongodb.net/ConnectifyDB?retryWrites=true&w=majority&appName=Cluster0");
        // const connectionDB = await mongoose.connect("mongodb+srv://img_upload_project:database69@cluster0.1jgyo4b.mongodb.net/?appName=Cluster0");
        
        console.log("MongoDB connection to DB host:",connectionDB.connection.host)
    } catch (error) {
        console.log("Error while connecting to MongoDB:",error);
    }
    server.listen('8000',()=>{
    console.log(`app is running at port 8000`)
  });
}

start();