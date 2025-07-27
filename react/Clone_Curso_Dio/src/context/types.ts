import React from "react";
import { IUser } from "../types/types";

export interface IAuthContext{
    user:IUser
    handleLogin: (loginData:ILoginData) => void
    handleSigOut: () => void
}

export interface IAuthContexProvider{
    children:React.ReactNode
}

export interface ILoginData{
    email:string,
    password:string
}