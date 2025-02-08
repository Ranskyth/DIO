/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ButtonContainer } from "./styles"
import { IButton } from "./types"

const Button = ({variant,onClick,title}:IButton) => {

    return(
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}

export default Button