import Button from '../button'
import Input from '../input'
import * as S from './styles'

function Search() {
  return (
    <S.Body>
      <Input placeholder="Pesquise uma palavra-chave"> </Input>
      <Button>
        <img src=".\src\images\search.svg"></img>
      </Button>
    </S.Body>
  )
}

export default Search
