import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display:inline-flex;
    /* width: 100%; */
    /* border: 4px blue solid; */
    /* height: 100px; */
    /* background-color: #f3e0dc; */

    `
const Text = styled.h1`
    width: 900px;
    /* border: 3px solid ; */
    display: flex;
    align-items: center;
padding-top: 10px;
    justify-content: center;
   
    font-size: 4rem;
/* position: absolute; */
    margin: 0;
    height: 100px;

    animation: moving 10s linear 0s infinite forwards;

    @keyframes moving {
        from{
            transform: translateX(0%);
        }
        to{
            transform: translateX(-100%);
        }
    }
`

const ScrollingWelcome = () => {
    return (
       <Container>
        <Text>Welcome to Shoeclicks </Text>
        <Text>Welcome to Shoeclicks </Text>
        <Text>Welcome to Shoeclicks </Text>
       </Container>
    );
};

export default ScrollingWelcome;