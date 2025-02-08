import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background-color: #535353;
    border-radius: 22px;
    position: relative;
    margin: 0 2px;
    border: none;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    &:hover{
        opacity: 0.6;
    }

    ${({variant}) => variant == "primary" && css`
        min-width: 157px;
        height: 33px;

        background-color: #e4105d;

        &::after{
            content: "";
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;

            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`