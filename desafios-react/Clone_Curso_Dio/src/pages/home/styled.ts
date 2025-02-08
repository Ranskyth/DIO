import {styled} from "styled-components"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    padding: 2% 0 0 3%;
    max-width: 1366px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    color: #e4105d;
    font-size: 36px;
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