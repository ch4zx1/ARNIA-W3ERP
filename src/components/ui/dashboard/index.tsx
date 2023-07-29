import Ratio from '@/components/subcomponents/ratio'
import * as S from './style'

function DashboardMenu() {
  return (
    <S.Body>
      <S.Top>
        <h1>Dashboard</h1>
        <S.ContainerDataSelection>
          <img src=".\src\images\data.svg"></img>
        </S.ContainerDataSelection>
      </S.Top>
      <S.ContainerRatio>
        <Ratio></Ratio>
        <Ratio></Ratio>
        <Ratio></Ratio>
        <Ratio></Ratio>
      </S.ContainerRatio>
    </S.Body>
  )
}

export default DashboardMenu
