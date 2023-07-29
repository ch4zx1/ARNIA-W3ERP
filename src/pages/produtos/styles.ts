import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fcfcfc;
`
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-right: 32px;

  h1 {
    color: var(--cinza-900, #212121);
    /* H4 32px */
    font-family: Sora;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 48px */
  }
`
export const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  margin-left: 32px;
  margin-right: 32px;
  border-radius: 24px;
  background: var(--branco, #fff);
  /* Sombra 3 */
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
  padding: 24px;
`
export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
`

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;

  input {
    border-radius: 16px;
    border: 1.5px solid var(--cinza-300, #e0e0e0);
    background: var(--branco, #fff);
    width: 400px;
    height: 56px;
    flex-shrink: 0;

    color: var(--cinza-600, #757575);
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    padding: 16px 50px 16px 16px;
  }

  button {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-left: -40px;
    margin-top: 16px;
    background-color: transparent;
    border-style: none;
  }
`
export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 32px;

  button {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--cinza-100, #f5f5f5);
    border: none;
  }
`
