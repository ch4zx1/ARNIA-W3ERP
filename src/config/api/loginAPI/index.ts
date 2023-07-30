import api from '@/config/api'
import { TokenType } from '@/config/types'

type Props = {
  email: string
  senha: string
}

export const loginAPI = ({ email, senha }: Props): Promise<TokenType> =>
  api
    .post('/central/autenticacao/login', {
      email: email,
      senha: senha
    })
    .then(response => response.data)
