import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 30px;
    background: #7159c1;
    color: #fff;
    letter-spacing: .4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .images { 
        width: 30vh;
        display: flex;
        justify-content: space-around;
        

        img { 
            width: 40px;
            height: 40px;
            background-size: cover;
            background-repeat: no-repeat;
            cursor: pointer;
        }

        img:hover { 
            padding-bottom: 5px;
            border-bottom: 2px solid #fff;
            border-radius: 2px;
        }
    }
    
`;
