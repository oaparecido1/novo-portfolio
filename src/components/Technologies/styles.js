import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  color: #7159c1;

  h1 { 
      font-weight: 500;
      font-size: 60px;
      margin-top: 20px;
      padding-left: 100px;
  }

  .images {
      display:flex;
      justify-content: space-around;
      align-items: center;
      padding: 50px 0;

      img { 
          background-size: cover;
          background-repeat: no-repeat;
          width: 200px;
          height: 200px;
      }
  }
`;
