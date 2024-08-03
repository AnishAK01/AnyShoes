import React from 'react';
import Data from '../src/Data';
import styled from 'styled-components';
import SizeBar from './SizeBar';

const Container = styled.div`
    /* border: 2px solid red; */
   width: 24.35%;
   /* height: 390px; */
   background-color: #ede8f5;
   border-radius: 20px;
`
const Img = styled.div`
    height: 300px;
    width: 300px;
   border-radius: 20px;

    /* border: 2px solid aquamarine; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: white;

    img{
        height: auto;
        width: 100%;
    }
`
const Details= styled.div`
padding-left: 20px;
    h3{
        font-size: 1.4rem;
    }
`
const Button = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
    button{
        height: 40px;
        width: 90px;
        border: none;
        outline: none;
        
    }
`


const Card = ({name,price,image, selectedSize, onSizeChange,handleClickCart,card}) => {
    return (
        <Container>
            <Img>
            <img src={image} alt="" />
            </Img>
            <Details>
            <h3>{name}</h3>
            <SizeBar selectedSize={selectedSize} onSizeChange={onSizeChange}/>
            <h4 style={{fontSize:"20px"}}>₹ {price} </h4>
            </Details>
            <Button>
            <button style={{backgroundColor:"#3d52a0",color:"white",cursor:"pointer"} } onClick={()=>handleClickCart(card)}>Add to cart</button>
            <button style={{backgroundColor:"gold",color:"black",cursor:"pointer"}}>Buy Now</button>
        </Button>
        </Container>
    );  
};

export default Card;