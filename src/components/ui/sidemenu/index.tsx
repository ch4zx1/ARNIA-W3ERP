import * as S from './style'
import { Button } from '@/components/ui'
import { useNavigate } from 'react-router-dom'

function Sidemenu() {
  const navigate = useNavigate()
  function handleClick({ page }: { page: number }) {
    page === 1
      ? navigate('/predicoes')
      : page === 2
      ? navigate('/produtos')
      : navigate('/dashboard')
  }

  return (
    <S.Body>
      <S.Sidemenu>
        <S.ContainerImg>
          <img src=".\src\images\logo.svg" />
        </S.ContainerImg>
        <S.ContainerButtons>
          <Button onClick={() => handleClick({ page: 0 })}>
            <img src=".\src\images\pie-two.svg"></img>Dashboard
          </Button>
          <Button onClick={() => handleClick({ page: 1 })}>
            <img src=".\src\images\chart-line.svg"></img>Predições
          </Button>
          <Button onClick={() => handleClick({ page: 2 })}>
            <img src=".\src\images\facial-cleanser.svg"></img>Produtos
          </Button>
        </S.ContainerButtons>
        <S.ContainerHelp>
          <img src=".\src\images\saly.svg"></img>
          <h2>
            Precisando de <span>ajuda ou suporte</span> em algo?
          </h2>
          <button>Fale conosco</button>
        </S.ContainerHelp>
      </S.Sidemenu>
    </S.Body>
  )
}

export default Sidemenu
