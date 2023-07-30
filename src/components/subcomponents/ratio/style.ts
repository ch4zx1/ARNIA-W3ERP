import styled from 'styled-components'

export const Body = styled.div`
  display: flex;

  width: 346px;
  height: 124px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #02156a;
`
export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-top: 24px;
  h4 {
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: #c5cfff;

    span {
      font-weight: 600;
    }
  }

  div {
    display: flex;
    flex-direction: row;

    h5 {
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0.2px;
      width: 60px;
      height: 24px;
      border-radius: 100px;
      background-color: #00c247;
      color: #ffffff;
      margin-left: 13px;
    }
  }
`
