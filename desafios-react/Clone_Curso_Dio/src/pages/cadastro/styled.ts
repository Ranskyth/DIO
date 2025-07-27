import {styled, css} from "styled-components";
import { ICadastroStyled } from "./types";

export const ContainerFlex = styled.main`
    padding: 5%;
    height: 100%;
    display: flex;
    margin: 60px 130px 60px;
    justify-content: space-between;

`
export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    width: 19.25rem;
    color: #ffffff;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;

`
export const ContainerForm = styled.div`
    width: 350px;
`
export const TitleForms = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: #ffffff;

`
export const SubTextForms = styled.p<ICadastroStyled>`
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;

    /* Inicio fw */
    
    ${({fw}) => fw == "1" && css`
        font-weight: 100;
    `}
    ${({fw}) => fw == "2" && css`
        font-weight: 200;
    `}
    ${({fw}) => fw == "3" && css`
        font-weight: 300;
    `}
    ${({fw}) => fw == "4" && css`
        font-weight: 400;
    `}
    ${({fw}) => fw == "5" && css`
        font-weight: 500;
    `}
    ${({fw}) => fw == "6" && css`
        font-weight: 600;
    `}
    ${({fw}) => fw == "7" && css`
        font-weight: 700;
    `}

    /*Inicio mt*/

    ${({mt}) => mt == "1" && css`
        margin-top: 5px;    
    `}
    ${({mt}) => mt == "2" && css`
        margin-top: 10px;    
    `}
    ${({mt}) => mt == "3" && css`
        margin-top: 15px;    
    `}
    ${({mt}) => mt == "4" && css`
        margin-top: 20px;    
    `}
    ${({mt}) => mt == "5" && css`
        margin-top: 25px;    
    `}
    ${({mt}) => mt == "6" && css`
        margin-top: 30px;    
    `}
    ${({mt}) => mt == "7" && css`
        margin-top: 35px;    
    `}
    ${({mt}) => mt == "8" && css`
        margin-top: 40px;    
    `}
    ${({mt}) => mt == "9" && css`
        margin-top: 45px;    
    `}
    ${({mt}) => mt == "10" && css`
        margin-top: 50px;    
    `}

    /* Inicio mb */

    ${({ mb }) => mb == "1" && css`
        margin-bottom: 5px;    
    `}
    ${({ mb }) => mb == "2" && css`
        margin-bottom: 10px;    
    `}
    ${({ mb }) => mb == "3" && css`
        margin-bottom: 15px;    
    `}
    ${({ mb }) => mb == "4" && css`
        margin-bottom: 20px;    
    `}
    ${({ mb }) => mb == "5" && css`
        margin-bottom: 25px;    
    `}
    ${({ mb }) => mb == "6" && css`
        margin-bottom: 30px;    
    `}
    ${({ mb }) => mb == "7" && css`
        margin-bottom: 35px;    
    `}
    ${({ mb }) => mb == "8" && css`
        margin-bottom: 40px;    
    `}
    ${({ mb }) => mb == "9" && css`
        margin-bottom: 45px;    
    `}
    ${({ mb }) => mb == "10" && css`
        margin-bottom: 50px;    
    `}

`

export const GreenText = styled.span`
    color: rgb(35, 221, 122);
`

