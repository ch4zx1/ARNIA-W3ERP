import * as S from './style'
import { Button } from '@/components/ui'

function Sidemenu() {
  return (
    <S.Body>
      <S.Sidemenu>
        <S.ContainerImg>
          <img src=".\src\images\logo.svg" />
        </S.ContainerImg>
        <S.ContainerButtons>
          <Button>
            <img src=".\src\images\pie-two.svg"></img>Dashboard
          </Button>
          <Button>
            <img src=".\src\images\chart-line.svg"></img>Predições
          </Button>
          <Button>
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
