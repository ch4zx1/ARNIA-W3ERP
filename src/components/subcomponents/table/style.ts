import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 771px;

  border-radius: 24px;
  background: var(--branco, #fff);
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
`
export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 30px;
`
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    color: var(--cinza-900, #212121);
    /* 20px Semibold */
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
    margin-left: 16px;
    margin-top: 11px;
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 251px;
  height: 40px;
  margin-top: 5px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 0.8px solid var(--cinza-300, #e0e0e0);
  background: var(--cinza-100, #f5f5f5);

  button {
    width: 119px;
    height: 32px;
    flex-shrink: 0;
    margin-top: 4px;
    margin-left: 4px;
    border: none;
    border-radius: 8px;
    background: var(--cinza-100, #f5f5f5);
    color: var(--cinza-500, #9e9e9e);
    text-align: center;
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
  }
`
