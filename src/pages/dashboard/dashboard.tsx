import DashboardMenu from '@/components/ui/dashboard'
import * as S from './styles'
import Sidemenu from '@/components/ui/sidemenu'
import Topmenu from '@/components/ui/topmenu'
import Table from '@/components/subcomponents/table/'

function Dashboard() {
  return (
    <>
      <S.Body>
        <Sidemenu></Sidemenu>
        <S.ContainerContent>
          <Topmenu></Topmenu>
          <DashboardMenu></DashboardMenu>
          <S.ContainerTables>
            <Table title="Produtos"></Table>
            <Table title="Clientes"></Table>
          </S.ContainerTables>
        </S.ContainerContent>
      </S.Body>
    </>
  )
}

export default Dashboard
