import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 347px;
  height: 266px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--branco, #fff);
  /* Sombra 3 */
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    background: var(--branco, #fff);
    border: none;
  }
`

export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 211px;

  img {
    margin-right: 6px;
  }

  h6 {
    color: var(--cinza-900, #212121);
    /* 16px semibold */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }

  span {
    color: var(--sucesso, #00c247);
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
  }
`

export const CardDesc = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 26px;
  width: 299px;
  height: 146px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #f7f7f7;
  padding: 16px;
`

export const ContainerProduto = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;

  h6 {
    color: var(--primria-azul-2, #796ce0);
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
    margin-bottom: 10px;
  }

  span {
    color: var(--cinza-800, #424242);
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
    margin-bottom: 12px;
  }
`

export const ContainerCompra = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    color: var(--primria-azul-2, #796ce0);
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
    margin-bottom: 10px;
  }

  span {
    color: var(--cinza-800, #424242);
    text-align: center;
    /* Small Text 14px Semibold */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
    margin-bottom: 12px;
  }
`
