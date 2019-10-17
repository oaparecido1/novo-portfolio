import styled from 'styled-components';

export const Container = styled.div`
    height: 8rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 3rem;
    background: #7159c1;
    color: #fff;
    letter-spacing: .4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .images { 
        width: 30rem;
        display: flex;
        justify-content: space-around;
        

        img { 
            width: 4rem;
            height: 4rem;
            background-size: cover;
            background-repeat: no-repeat;
            cursor: pointer;
        }

        img:hover { 
            padding-bottom: .5rem;
            border-bottom: .2rem solid #fff;
            border-radius: .2rem;
        }
    }
    
`;
