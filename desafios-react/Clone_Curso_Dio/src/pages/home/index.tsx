/* eslint-disable no-unused-vars */
import {useNavigate} from "react-router-dom"
import Header from "../../components/Header"
import Button from "../../components/Button"
import banner from "../../assets/banner.png"

import {
    Container,
    Title,
    TextContent,
    TitleHighlight
} from "./styled"


const Home = () =>{
    const navigator = useNavigate() 
    return (
    <>
        <Header/>
        <Container>
            <div>
                <Title>
                <TitleHighlight>
                    Implemente <br/>
                </TitleHighlight>
                o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as Tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio proficional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar Agora" variant="primary" onClick={() => {navigator("/login")}}/>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </Container>
    </>
    )
}

export default Home