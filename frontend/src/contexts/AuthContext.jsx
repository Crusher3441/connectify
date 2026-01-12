import axios from 'axios';
import { Children, createContext, useContext, useState } from 'react';
import useNavigate from 'react-router-dom'

export const AuthContext = createContext({});

const client = axios.create({
    baseURL:"localhost:3000/api/v1/users"
})

export const AuthProvider = ({children}) =>{
    const authContext = useContext(AuthContext);

    const [userData, setUserData] = useState(authContext);

    const router = useNavigate();

}