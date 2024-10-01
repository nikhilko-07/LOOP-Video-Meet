import axios from 'axios';
import httpStatus from "http-status";
import { createContext,  useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const client = axios.create({
    baseURL: "http://localhost:8000/api/v1/user"
});

export const AuthProvider = ({ children }) => {
       
    let routeTo = useNavigate()

    const handleRegister = async (name, username, password) => {
        try {
            let request = await client.post("/register", {
                name: name,
                username: username,
                password: password
            });
            if (request.status === httpStatus.CREATED) {
                return request.data.message;
            }
        } catch (err) {
            console.error("Registration error:", err);
            throw err;
        }
    };

    const handleLogin = async (username, password) => {
        try {
            let request = await client.post("/login", {
                username: username,
                password: password
            });
            if (request.status === httpStatus.OK) {
                localStorage.setItem("token", request.data.token);
                routeTo("/home")
                
            }
        } catch (err) {
            console.error("Login error:", err);
            throw err;
        }
    };
    

   
   
    const data = {
      handleRegister, handleLogin
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
