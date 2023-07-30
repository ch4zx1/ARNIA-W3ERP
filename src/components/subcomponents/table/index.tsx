import * as S from './style'
import { getDashboardApi } from '@/config/api/dashboardAPI'

type Prop = {
  title: string
}

function Table({ title }: Prop) {
  return (
    <S.Body>
      <S.ContainerTop>
        <S.ContainerInfo>
          {title === 'Produtos' ? (
            <img src="src\images\produts.svg" alt="" />
          ) : title === 'Clientes' ? (
            <img src="src\images\clients.svg" alt="" />
          ) : (
            <img src="src\images\aaaa.svg" alt="" />
          )}
          <h1>{title}</h1>
        </S.ContainerInfo>
        <S.ContainerButtons>
          <button onClick={() => console.log(getDashboardApi())}>
            Em alta
          </button>
          <button>Em baixa</button>
        </S.ContainerButtons>
      </S.ContainerTop>
    </S.Body>
  )
}

export default Table
