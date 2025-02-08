/* eslint-disable no-unused-vars */

import {MdEmail, MdLock} from "react-icons/md"
import {Link} from "react-router-dom"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from "../../services/api"
import { ILogin } from "./types"

import {
    Container,
    Title,
    Colunm,
    CriarText,
    EsqueciText,
    Row,
    SubTitleLogin,
    TitleLogin,
    Wrapper
} from "./styled"
import { Column } from "../../components/Header/style"
import { useContext } from "react"
import { AuthContext } from "../../context/Auth"

const schema = yup.object({
    email: yup.string().email("Email Invalido").required("Campo Obrigatorio"),
    password: yup.string().min(3, "no minimo 3 caracteres").required("Campo Obrigatorio"),
  }).required();

const Login = () =>{

    const {handleLogin} = useContext(AuthContext)

    const { control , handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    const onSubmit = async(formsdata: ILogin) => {
        handleLogin(formsdata)
    }

    return (
    <>
        <Header/>
        <Container>
            <Colunm>
                <Title>
                    A Plataforma Para Você Aprender Com Experts, Dominar as Principais Tecnologias e Entrar Mais Rápido nas Empresas Mais Desejadas
                </Title>
            </Colunm>
            <Column>
            <Wrapper>
                <TitleLogin>Faça Seu Login</TitleLogin>
                <SubTitleLogin>Faça Seu Login e Make the Change._</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input  error={errors.email?.message} control={control} name="email" type="email"  placeholder="E-mail" leftIcon={<MdEmail/>}/>
                    <Input error={errors.password?.message} control={control} name="password" type="password"  placeholder="Senha"  leftIcon={<MdLock/>}/>
                    <Button title="Login" type="submit" variant="primary"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci Minha Senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
}

export default Login