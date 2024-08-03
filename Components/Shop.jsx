import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Data from '../src/Data';
import Navbar from './Navbar';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    /* border: 6px solid blue; */
  
`
const CardContainer = styled.div`
    /* border: 3px solid ; */
    display: flex;
  flex-wrap:  wrap;
  gap: 20px;
  margin: 100px auto;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
    /* display: flex; */
`


const Shop = ({ handleClickCart }) => {

    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');


    const handleSizeChange = (index, size) => {
        setSelectedCardIndex(index);
        setSelectedSize(size);
    };

    return (
        <Container>
            <nav>
                {/* <Navbar /> */}
            </nav>
            <CardContainer>
                {Data.map((card, index) => (
                    <Card
                        card={card}

                        key={card.image}
                        name={card.name}
                        image={card.image}
                        price={card.price}
                        selectedSize={selectedCardIndex === index ? selectedSize : ''}
                        onSizeChange={(size) => handleSizeChange(index, size)}
                        handleClickCart={handleClickCart}
                    />
                ))}


            </CardContainer>

        </Container>
    );
};

export default Shop;