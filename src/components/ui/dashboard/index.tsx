import { DashboardType } from '@/config/types'
import Ratio from '@/components/subcomponents/ratio'
import * as S from './style'

type Props = {
  data: DashboardType
}

function DashboardMenu(props: Props) {
  return (
    <S.Body>
      <S.Top>
        <h1>Dashboard</h1>
        <S.ContainerDataSelection>
          <img src=".\src\images\data.svg"></img>
        </S.ContainerDataSelection>
      </S.Top>
      <S.ContainerRatio>
        <Ratio
          title={'produtos'}
          type={'alta'}
          chart={props.data.percentualTotalProdutosAlta}
          numberOf={props.data.quantidadeProdutosAlta}
          variation={props.data.percentualVariacaoProdutosAlta}
        ></Ratio>
        <Ratio
          title={'produtos'}
          type={'baixa'}
          chart={props.data.percentualTotalProdutosBaixa}
          numberOf={props.data.quantidadeClientesBaixa}
          variation={props.data.percentualVariacaoProdutosBaixa}
        />
        <Ratio
          title={'clientes'}
          type={'alta'}
          chart={props.data.percentualTotalClientesAlta}
          numberOf={props.data.quantidadeClientesAlta}
          variation={props.data.percentualVariacaoClientesAlta}
        />
        <Ratio
          title={'clientes'}
          type={'baixa'}
          chart={props.data.percentualTotalClientesBaixa}
          numberOf={props.data.quantidadeClientesBaixa}
          variation={props.data.percentualVariacaoProdutosBaixa}
        />
      </S.ContainerRatio>
    </S.Body>
  )
}

export default DashboardMenu
