/* eslint-disable no-unused-vars */
import {useNavigate} from "react-router-dom"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Card from "../../components/Card"
import UserInfo from "../../components/UserInfo"

import {
    Container,
    Title,
    TitleHighlight,
    Colunm,
    TextContent
} from "./styled"
import { useContext } from "react"
import { AuthContext } from "../../context/Auth"


const Home = () =>{

    const {user} = useContext(AuthContext)
    
    return (
    <>
    { user.id ?<>
        <Header/>
        <Container>
            <Colunm flex={4} >
            <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Colunm>
            <Colunm flex={1}>
                <TitleHighlight>#RANKING TOP 5</TitleHighlight>
                <UserInfo name="Lucas" image="https://avatars.githubusercontent.com/u/126430100?s=96&v=4" percentual={89}/>
                <UserInfo name="Lucas" image="https://avatars.githubusercontent.com/u/126430100?s=96&v=4" percentual={74}/>
                <UserInfo name="Lucas" image="https://avatars.githubusercontent.com/u/126430100?s=96&v=4" percentual={66}/>
                <UserInfo name="Lucas" image="https://avatars.githubusercontent.com/u/126430100?s=96&v=4" percentual={49}/>
                <UserInfo name="Lucas" image="https://avatars.githubusercontent.com/u/126430100?s=96&v=4" percentual={32}/>
            </Colunm>      
        </Container>
    </> : 
    <>
        <h1>Não Logado</h1>
    </>}
    </>

    )
}

export default Home