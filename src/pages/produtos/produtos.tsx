import Input from '@/components/subcomponents/input'
import * as S from './styles'
import Sidemenu from '@/components/ui/sidemenu'
import Topmenu from '@/components/ui/topmenu'
import { Button } from '@/components/ui'
import Search from '@/components/subcomponents/search'

function Produtos() {
  return (
    <S.Body>
      <Sidemenu></Sidemenu>
      <S.ContainerContent>
        <Topmenu></Topmenu>
        <S.ContainerHeader>
          <h1>Produtos</h1>
        </S.ContainerHeader>
        <S.ContainerTable>
          <S.ContainerTop>
            <Search></Search>
            <S.ContainerFilter>
              <Button>
                <img src=".\src\images\filter.svg"></img>
              </Button>
            </S.ContainerFilter>
          </S.ContainerTop>
        </S.ContainerTable>
      </S.ContainerContent>
    </S.Body>
  )
}

export default Produtos
