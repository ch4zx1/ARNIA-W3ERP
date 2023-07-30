import * as S from './style'
import Chart from '../piechart'
import { RatioCardType } from '@/config/types'

function Ratio({ title, type, variation, numberOf, chart }: RatioCardType) {
  return (
    <S.Body>
      <Chart percentual={chart} />
      <S.ContainerData>
        <h4>
          Total <span>{title}</span> em {type}
        </h4>
        <div>
          {numberOf} <h5>{variation}%</h5>
        </div>
      </S.ContainerData>
    </S.Body>
  )
}

export default Ratio
