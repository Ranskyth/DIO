import {styled} from "styled-components"
import { IColunm } from "./types"


export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Colunm = styled.div<IColunm>`
    flex:${({flex}) => flex};
    padding-right: 23px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    width: 360px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`

export const TitleHighlight = styled.span`
    display: inline-block;
    color: #FFFFFF70;
    font-size: 36px;
    width: 320px;
    margin-bottom: 25px;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #fff;
`