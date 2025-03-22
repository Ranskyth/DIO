import {FiThumbsUp} from "react-icons/fi"

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from "./styles"

const Card = () =>{
    return(
        <CardContainer>
            <ImageBackground src="https://hermes.dio.me/articles/cover/ad730e77-edb6-403a-9bce-f9556ef756a1.png"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/126430100?v=4"/>
                    <div>
                        <h4>Gabriel</h4>
                        <p>Há 6 Minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4></h4>
                    <p>Projeto Feito o Curso de HTML e CSS no bootcamp dio do </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JAVASCRIPT</h4>
                    <p>
                        <FiThumbsUp/> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card