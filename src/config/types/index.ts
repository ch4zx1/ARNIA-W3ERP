import { ReactNode } from 'react'

export type TokenType = {
  token: string
  type: string
}

export type UserType = {
  email: string
  senha: string
}

export type TableDashboardApiType = {
  title: string
  classification: string
}

export type ChartType = {
  percentual: number
}

export type RatioCardType = {
  title: string
  type: string
  chart: number
  numberOf: number
  variation: number
}

export type DashboardType = {
  percentualTotalClientesAlta: number
  percentualTotalClientesBaixa: number
  percentualTotalProdutosAlta: number
  percentualTotalProdutosBaixa: number
  percentualVariacaoClientesAlta: number
  percentualVariacaoClientesBaixa: number
  percentualVariacaoProdutosAlta: number
  percentualVariacaoProdutosBaixa: number
  quantidadeClientesAlta: number
  quantidadeClientesBaixa: number
  quantidadeProdutosAlta: number
  quantidadeProdutosBaixa: number
}
