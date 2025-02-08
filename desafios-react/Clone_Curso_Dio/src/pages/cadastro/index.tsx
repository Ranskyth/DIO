import Header from "../../components/Header"
import Input from "../../components/Input"
import {MdEmail, MdLock, MdPerson} from "react-icons/md"
import Button from "../../components/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom"
import { ICadastroData } from "./types"

import {
    ContainerFlex,
    Title,
    ContainerForm,
    SubTextForms,
    TitleForms, 
    GreenText
} from "./styled"
import api from "../../services/api"

const schema = yup.object({
    nome: yup.string().min(3, "Minimo 3 Caracteres").required("Required"),
    email: yup.string().email("Email Invalido").required("Email Necessario"),
    password: yup.string().required("Senha Necessaria").min(8, "Minimo de 8 Caracteres"),
  }).required();

export const Cadastro = () => {

    const {control, handleSubmit , formState:{errors}} = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    function sub(data: ICadastroData){
        try{
            api.post("/users", data)
            alert("Cadastro Realizado com Sucesso")
        }catch{
            alert("Erro ao Cadastrar")
        }
    }
    return(
    <>
        <Header/>
        <ContainerFlex>
            <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            <ContainerForm>
                <TitleForms>Comece agora grátis</TitleForms>
                <SubTextForms mt="2" mb="2" fw="1">Crie sua conta e make the change._</SubTextForms>
                <form onSubmit={handleSubmit(sub)} >
                    <input type="hidden" name="id"/>
                    <Input error={errors.nome?.message} control={control} name="nome" type="text" placeholder="Nome Do Usuario"  leftIcon={<MdPerson/>}/>
                    <Input error={errors.email?.message} control={control} name="email" type="email"  placeholder="Email Do Usuario"  leftIcon={<MdEmail/>}/>
                    <Input error={errors.password?.message} control={control} name="password" type="password"  placeholder="Senha"  leftIcon={<MdLock/>}/>
                    <Button variant="primary" title={"Criar minha conta"}/>
                </form>
                <SubTextForms mt="8" fw="1">Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTextForms>
                <SubTextForms mt="3" fw="7">Já tenho conta. <Link to={"/login"}><GreenText>Fazer login</GreenText></Link></SubTextForms>
            </ContainerForm>
        </ContainerFlex>
    </>
    )
}