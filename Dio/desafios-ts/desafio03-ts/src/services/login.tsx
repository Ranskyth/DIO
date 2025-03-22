import { api } from "../api"

export const login = async (email: string, senha:string): Promise<boolean> => {
    const data: any = await api

    if(email !== data.email || senha !== data.password){
        return false
    }

    return true
}
