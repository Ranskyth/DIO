import { login } from "./login";

interface IDIoBank {
    login: boolean;
}

export interface IUser {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

const user = {
    email: '',
    password: '',
    name: '',
    balance: 0,
    id: '',
}

const dioBank = {
    login: false
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const getAllLocalStorageUser = (): string | null  => {
    return localStorage.getItem('user')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
export const createLocalStorageUser = (): void => {
    localStorage.setItem('user', JSON.stringify(user))
    
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorageUser = (user: IUser): void => {
    localStorage.setItem('user', JSON.stringify(user))
}
