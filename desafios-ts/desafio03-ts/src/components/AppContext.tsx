import { createContext, useEffect, useState } from "react"
import { createLocalStorageUser, getAllLocalStorage, getAllLocalStorageUser, IUser } from "../services/storage"
import { api } from "../api"

interface IAppContext {
    user: {},
    setUser: (user: IUser) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ user, setUser ] = useState<IUser>({} as IUser)


    const storage = getAllLocalStorage()
    const storageUser = getAllLocalStorageUser()


    useEffect(() => {
      if(storage && storageUser){
        const { login } = JSON.parse(storage)
        const { email, password, name, balance ,id} = JSON.parse(storageUser)
        setUser({ email, password, name, balance, id })
        setIsLoggedIn(login)
      }
    }, [])

  
    return (
      <AppContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
        { children }
      </AppContext.Provider>
    )
}
