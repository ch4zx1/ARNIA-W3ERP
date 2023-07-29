import * as S from './style'

function Topmenu() {
  return (
    <S.Body>
      <img src=".\src\images\hmenu.svg"></img>
      <S.ContainerUserBox>
        <img src=".\src\images\user.svg"></img>
        <S.ContainerUser>
          <h1>Rafael Pimenta</h1>
          <span>rafael@gmail.com</span>
        </S.ContainerUser>
        <button>
          <img src=".\src\images\down.svg"></img>
        </button>
      </S.ContainerUserBox>
    </S.Body>
  )
}

export default Topmenu
