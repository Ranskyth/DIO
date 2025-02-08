import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";


const Button = ({children, title, onClick, disabled}:IButtonProps) => {
  return (<ButtonContainer onClick={onClick} disabled={disabled}>{title || children}</ButtonContainer>);
};

export default Button;
