import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 1582px;
  height: 292px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--primria-azul-1, #001c98);
  margin-top: 32px;
  margin-left: 32px;
`

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;

  h1 {
    color: var(--branco, #fff);
    /* H4 32px */
    font-family: Sora;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 48px */
  }
`

export const ContainerDataSelection = styled.div`
  width: 224px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--branco, #fff);
`
export const ContainerRatio = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
  gap: 40px;
`
