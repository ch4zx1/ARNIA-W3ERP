import Input from '@/components/subcomponents/input'
import * as S from './styles'

function Login() {
  return (
    <S.Body>
      <S.Left>
        <S.Header>
          <h2>Seja bem vindo!</h2>
          <h1>Realize seu Login</h1>
        </S.Header>
        <S.Form>
          <Input placeholder="Insira uma senha">Senha</Input>
          <Input placeholder="usuario@email.com">E-mail</Input>
        </S.Form>
        <S.ContainerCheckbox></S.ContainerCheckbox>
      </S.Left>
      <S.Right>
        <img src=".\src\images\imgLogin.jpg" />
      </S.Right>
    </S.Body>
  )
}

export default Login
