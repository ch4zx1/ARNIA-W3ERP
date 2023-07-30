import * as S from './style'

function Card() {
  return (
    <>
      <S.Body>
        <S.CardContent>
          <S.CardHeader>
            <img src=".\src\images\people.svg" />
            <S.ContainerName>
              <h6>Hotel Hibis</h6>
              <span>
                <img src=".\src\images\fill.svg" />
                Status vai aqui
              </span>
            </S.ContainerName>
            <button>
              <img src=".\src\images\right.svg" />
            </button>
          </S.CardHeader>
          <S.CardDesc>
            <S.ContainerProduto>
              <h6>Produto</h6>
              <span>Álcool em gel</span>
              <span>Água sanitária</span>
              <span>Papel higiênico</span>
            </S.ContainerProduto>
            <S.ContainerCompra>
              <h6>Próx. compra</h6>
              <span>02/09/22</span>
              <span>02/09/22</span>
              <span>02/09/22</span>
            </S.ContainerCompra>
          </S.CardDesc>
        </S.CardContent>
      </S.Body>
    </>
  )
}

export default Card
