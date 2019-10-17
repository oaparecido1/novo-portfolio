import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .box {
    width: 350px;
    height: 320px;
    background: #baaee4;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 30px;

    a {
      font-style: normal;
      font-weight: bold;
      font-size: 47px;
      line-height: 55px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #7159c1;
      text-decoration: none;
    }

    p {
      padding: 0 10px;
      color: #f1effe;
      font-style: normal;
      font-weight: 500;
      font-size: 27px;
      line-height: 32px;
      text-align: center;
    }
  }
`;
