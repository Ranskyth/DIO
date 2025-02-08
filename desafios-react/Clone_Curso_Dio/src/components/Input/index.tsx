/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {IconContainer,InputText,InputContainer,ErrorText} from "./styled"
import { useForm, Controller } from "react-hook-form";
import { IInput } from "./types";

const Input = ({leftIcon, name, control, error}:IInput) => {
    return(
        <>
            <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field}/>}/>
            </InputContainer>
            {error ? <ErrorText>{error}</ErrorText> : null}
        </>
    )
}

export default Input