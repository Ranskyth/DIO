import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #181818;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonExitFeed = styled.button`
    margin: 12px 22px;
    background-color: #443f53;
    width: 78px;
    border: none;
    &:hover{
        background-color: #443f538e;
    }
`

export const BuscaInputContainer = styled.div`
    width: 185px;
    height: 30px;
    background: #443f53;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;

`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`
export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff;
`

export const Input = styled.input`
    background-color: transparent;
    flex: 1;
    border: 0;
    height: 100%;
    font-size: 15px;

    color: #fff;
`

export const Img = styled.img`
    width: 75px;
    height: 75px;
`