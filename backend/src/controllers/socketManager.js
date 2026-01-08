import { Server } from "socket.io";

export const connectToSocket = (s) =>{
    const io = new Server(s);
    return io;
}