import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import { useEffect } from 'react';
import Checkout from './Checkout';


const Container = styled.div`
    /* border: 2px solid white; */
    width: 100%;
    height: auto;
    /* margin: 100px auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
`
const List = styled.div`
    border: 1px solid ;
    width: 70%;
    height: 130px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ede8f5;
    /* background-color: #ffffff; */
    border-radius: 20px;
    padding: 5px;
`
const Img = styled.div`
    height: 70%;
    width: 100px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    img{
        height: auto;
        width: 100%;
    }

`
const Info = styled.div`
     height: 60%;
    width: 200px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.3rem;
    align-items: center;
    color: #3d52a0;

`
const Quantity = styled.div`
     height: 40%;
    width: 120px;
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-evenly;
    font-size: 1.3rem;
    align-items: center;

    button{
        padding: 10px;
        border: none;
        background-color: #3d52a0;
        color: white;
        border-radius: 8px;
    }
`
const TotalPrice = styled.div`
     height: 50%;
    width: 200px;
    padding: 5px;
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-evenly;
    font-size: 1.2rem;
    align-items: center;
    span{
    color: #3d52a0;
        
    }
`
const Deletebtn = styled.div`
     height: 30%;
    width: 50px;
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-evenly;
    font-size: 1.3rem;
    align-items: center;
    color: #ab0000;
`
const CartTotal = styled.div`
    
`
const EmptyMessage = styled.div`
    margin: 120px auto;
    width: 80%;
    text-align: center;
    color: #8e0000;
    font-size: 2.5rem;
`;

const Cart = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((card) => (
            ans += card.amount * card.price
        ));
        setPrice(ans);
    }

    useEffect(() => {
        handlePrice();
    });

    const handleRemove = (id) => {
        const arr = cart.filter((card) => card.id !== id);
        setCart(arr);
        handlePrice();
    }
    const EmptyCart = (price) => {
        if (price === 0) {
            <div style={{ margin: "120px auto", width: "80%" }}>none</div>
        }
    }
    const [checkout, setCheck] = useState(false);

    const checkoutClick = () => {
        setCheck(true);

    }


    return (
        <>
            <Container>
                <div style={{
                    margin: "120px auto", width: "80%"
                }}>
                    {
                        cart.length === 0 ? (<EmptyMessage>Your Cart is Empty</EmptyMessage>) : (
                            <>
                                {
                                    cart.map((card) => (

                                        <List key={card.id}>
                                            <Img><img src={card.image} alt="" /></Img>
                                            <Info>
                                                <p>{card.name}</p>
                                                <p>{card.price}</p>
                                            </Info>

                                            <Quantity>
                                                <button onClick={() => handleChange(card, +1)} style={{ cursor: "pointer" }}>+</button>
                                                <span>{card.amount}</span>
                                                <button onClick={() => handleChange(card, -1)} style={{ cursor: "pointer" }}>-</button>
                                            </Quantity>
                                            <TotalPrice>Total Price : <span>{card.amount * card.price}</span></TotalPrice>
                                            <Deletebtn onClick={() => handleRemove(card.id)} ><DeleteRoundedIcon /></Deletebtn>

                                        </List>

                                    ))}
                                <CartTotal>
                                    <h3>Your total price</h3>
                                    <span>₹ {price}</span>
                                    <br />


                                    {
                                        checkout === true ? (
                                            <>
                                                <Checkout />
                                            </>
                                        ) : (
                                            <>
                                                <button style={{
                                                    backgroundColor: "black",
                                                    color: "whitesmoke",
                                                    padding: "12px",
                                                    border: "none",
                                                    margin: "20px",
                                                    cursor: "pointer"
                                                }} onClick={checkoutClick}>Checkout</button>

                                            </>
                                        )
                                    }

                                </CartTotal>
                            </>
                        )
                    }


                    {/* <Checkout/> */}


                </div>


            </Container>
        </>
    );
};

export default Cart;