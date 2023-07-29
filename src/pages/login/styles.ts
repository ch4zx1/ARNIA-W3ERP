import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  width: 160vh;
  height: 100vh;
`
export const Right = styled.div`
  display: flex;
  justify-content: center;
  width: 100vh;
  height: 100vh;
`
export const Header = styled.div`
  width: 400px;
  h2 {
    color: var(--cinza-800, #424242);
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }
  h1 {
    color: var(--cinza-900, #212121);
    font-family: Sora;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
`

export const Form = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column-reverse;

  input {
    padding: 16px;
    width: 400px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--cinza-300, #e0e0e0);
    background: var(--branco, #fff);

    color: var(--cinza-900, #212121);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    outline: none;
  }
  input:focus:valid {
    border: 1px solid var(--sucesso, #00c247);
  }

  label {
    color: var(--cinza-600, #757575);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
  }
  input:focus:valid + label {
    color: var(--sucesso, #00c247);
  }
`
export const ContainerCheckbox = styled.div``
