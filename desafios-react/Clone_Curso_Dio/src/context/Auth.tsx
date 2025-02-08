import {Children, createContext,useState } from "react";
import { IAuthContext, IAuthContexProvider, ILoginData } from "./types";
import { IUser } from "../types/types";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContexProvider = ({children}:IAuthContexProvider) => {

    const nav = useNavigate()
    
    const [user, setUser ] = useState<IUser>({} as IUser)

    const handleSigOut = () => {
        setUser({} as IUser)
        nav("/")
    }

    const handleLogin = async (loginData:ILoginData) => {
        try {
            const {data} = await api.get(`/users?email=${loginData.email}&password=${loginData.password}`)
            if(data.length === 1){
                setUser(data[0])
                nav("/feed")
            }else{
                alert("Email ou senha invalidos")
            }

            } catch (error) {
                alert("Ocorreu um erro ao fazer login")
            }
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleSigOut }}>
            {children}
        </AuthContext.Provider>
    );
}