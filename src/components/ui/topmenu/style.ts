import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 130px;
  padding: 37px 48px 37px 32px;
  align-items: center;
  gap: 1274px;
  flex-shrink: 0;
  background-color: white;
`
export const ContainerUserBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 260px;
  height: 56px;
  flex-shrink: 0;

  img {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
  }

  button {
    margin-left: 15px;
    border: none;
    background-color: transparent;
    img {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  }
`
export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 2px;

  h1 {
    color: var(--cinza-900, #212121);
    /* 20px Semibold */
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }

  span {
    color: var(--cinza-600, #757575);
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }
`
