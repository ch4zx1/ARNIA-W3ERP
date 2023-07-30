import api from '@/config/api'
import { TableDashboardApiType } from '../../types'
const token = localStorage.getItem('TOKEN_AUTH')

export const getDashboardApi = () =>
  api
    .get('/app/dashboard/resumo', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data)

export const getTableApi = ({ classification, title }: TableDashboardApiType) =>
  api
    .get('/app/dashboard/' + title + 's?classificacao=' + classification, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data)
