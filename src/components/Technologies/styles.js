import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  color: #7159c1;

  h1 { 
      font-weight: bold;
      letter-spacing: .5rem;
      font-size: 4rem;
  }

  .images {
      display:flex;
      justify-content: space-around;
      align-items: center;
      padding: 2rem 0;

      img { 
          background-size: cover;
          background-repeat: no-repeat;
          width: 10rem;
          height: 10rem;
          border-radius: 1rem;
      }
  }
`;
