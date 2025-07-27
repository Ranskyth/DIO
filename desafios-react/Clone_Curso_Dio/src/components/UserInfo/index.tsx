/* eslint-disable no-unused-vars */
import {
    Container,
    NameText,
    Process,
    UserPicture,
    
} from "./styles"
import { IUserInfo } from "./types"
const UserInfo = ({image,name,percentual}:IUserInfo) => {
    return(
        <Container>
            <UserPicture src={image}/>
            <div>
                <NameText>{name}</NameText>
                <Process percentual={percentual}/>
            </div>
        </Container>
    )
}


export default UserInfo