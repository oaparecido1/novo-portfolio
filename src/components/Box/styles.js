import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .box {
    width: 25rem;
    height: 20rem;
    background: #baaee4;
    border-radius: .7rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 3rem;;

    a {
      font-style: normal;
      font-weight: bold;
      font-size: 3.5rem; 
      letter-spacing: .4rem;
      display: flex;
      align-items: center;
      text-align: center;
      color: #7159c1;
      text-decoration: none;
    }

    p {
      padding: 0 1rem;
      color: #f1effe;
      font-style: normal;
      font-weight: 500;
      line-height: 2rem;
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
