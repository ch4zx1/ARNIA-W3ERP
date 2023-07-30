import DashboardMenu from '@/components/ui/dashboard'
import * as S from './styles'
import Sidemenu from '@/components/ui/sidemenu'
import Topmenu from '@/components/ui/topmenu'
import Table from '@/components/subcomponents/table/'
import { useEffect, useState } from 'react'
import { DashboardType } from '@/config/types'
import { getDashboardApi } from '@/config/api/dashboardAPI'

function Dashboard() {
  const [resume, setResume] = useState<DashboardType>()
  useEffect(() => {
    getResume()
  }, [])

  async function getResume() {
    const response = await getDashboardApi()
    setResume(response)
  }

  return (
    <>
      <S.Body>
        <Sidemenu></Sidemenu>
        <S.ContainerContent>
          <Topmenu></Topmenu>
          {resume && <DashboardMenu data={resume} />}
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
