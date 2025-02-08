import {styled} from "styled-components"
import { UserInfoStyled } from "./types"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`
export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border:  3px solid #FFFFFF;
    margin-right: 12px;
`

export const NameText = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
`

export const Process = styled.div<UserInfoStyled>`
    width: 180px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
`