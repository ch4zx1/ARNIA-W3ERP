import Input from '@/components/subcomponents/input'
import * as S from './styles'
import Button from '@/components/subcomponents/button'
import { useState } from 'react'
import { TokenType, UserType } from '@/config/types'
import { loginAPI } from '@/config/api/loginAPI'
import { useNavigate } from 'react-router-dom'
import api from '@/config/api'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  async function handleClick() {
    const user: UserType = {
      email: email,
      senha: password
    }
    const token: TokenType = await loginAPI(user)
    localStorage.setItem('TOKEN_AUTH', token.token)
    api.defaults.headers.common['X-TENANT-ID'] = 'arnia'
    navigate('/dashboard')
  }

  const [isShow, setIsShow] = useState(true)

  const togglePassword = () => {
    setIsShow(isShow => !isShow)
  }

  return (
    <S.Body>
      <S.Left>
        <S.Header>
          <h2>Seja bem vindo!</h2>
          <h1>Realize seu Login</h1>
        </S.Header>
        <S.Form>
          <S.ContainerShowPassword>
            <Button
              onClick={() => {
                togglePassword()
              }}
            >
              <img src=".\src\images\showpass.svg"></img>
            </Button>
            <S.ContainerPassword>
              <Input
                type={isShow ? 'text' : 'password'}
                placeholder="Insira uma senha"
                onChange={e => setPassword(e.target.value)}
              >
                Senha
              </Input>
            </S.ContainerPassword>
          </S.ContainerShowPassword>
          <Input
            placeholder="usuario@email.com"
            onChange={e => setEmail(e.target.value)}
          >
            E-mail
          </Input>
        </S.Form>
        <S.ContainerCheckbox>
          <Input type="Checkbox">Lembrar-me</Input>
          <a href="">Esqueci minha senha</a>
        </S.ContainerCheckbox>
        <S.ContainerEntrar>
          <Button onClick={handleClick}>Entrar</Button>
        </S.ContainerEntrar>
      </S.Left>
      <S.Right>
        <img src=".\src\images\imgLogin.jpg" />
      </S.Right>
    </S.Body>
  )
}

export default Login
