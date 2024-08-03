import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    /* border: 1px dotted blue; */
    /* height: 600px; */
    margin-top: 50px;
    h2{
        margin: 50px auto;
    }

    form{
     border: 1px dotted blue;
     display: flex;
     flex-direction:column;
     height: 70%;

     div{
        margin: 10px;
         display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        label{
        padding: 10px;
        font-size: 1.2rem;
        }
        input{
        padding: 10px;
        width: 70%;
        background-color: #dedede;
        border: 0.5px solid gray;
        outline: none;
        border-radius: 15px;

        }
        span{
        display: flex;
         input{
            padding: 2px;
            height: 50px;
            width: 130px;
            }
        }
     }  
     button{
        width: 100px;
        padding: 10px;
        border-radius: 20px;
        border: none;
        background: rgb(255,255,255);
        background: linear-gradient(341deg, rgba(255,255,255,1) 0%, rgba(112,230,112,1) 56%);
        color: #015501;
        cursor: pointer;
        margin: 20px;
     } 
    }
`

const Checkout = () => {

    const [pay, setPay] = useState(false);

    const nextClick = () => {
        setPay(true);
    }
const orderClick = () => {

    // const [pay, setPay] = useState(false);
alert("Order has been Confirmed");
}

    return (
        <Container>
            <h2>Your Shipping details</h2>
            <form action="">

                {
                    pay === false ? (
                        <>
                            <div>

                                <label htmlFor="name">Name</label>
                                <input type="text" id='name' placeholder='Full Name' />

                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" max={10} min={10} id='phone' placeholder='Phone' />

                                <label htmlFor="mail">E-mail</label>
                                <input type="email" id='mail' placeholder='E-mail' />
                            </div>
                            <div>
                                <span>
                                    <label htmlFor="city">City</label>

                                    <input type="text" id='city' placeholder='City' />

                                    <label htmlFor="pin">Pin code</label>
                                    <input type="number" id='pin' placeholder='PIN' />
                                </span>


                                <label htmlFor="address">Address</label>
                                <input type="text" id='address' placeholder='Address' />

                                <button onClick={nextClick}>Next</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>

                                <label htmlFor="cardname">Enter Card Holder Name</label>
                                <input type="text" id='cardname' placeholder='Full Name' />

                                <label htmlFor="Cardnum">Card Number</label>
                                <input type="number" max={10} min={10} id='Cardnum' placeholder='Phone' />


                            </div>
                            <div>
                                <span>
                                    <label htmlFor="cardtype">Card Type</label>

                                    <select id="cardtype" name="cardtype">
                                        <option value="none">None</option>
                                        <option value="debit">Debit</option>
                                        <option value="credit">Credit</option>

                                    </select>

                                    <label htmlFor="expire">Expiry Year</label>

                                    <select id="expire" name="expire">
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>

                                    </select>
                                </span>




                                <button onClick={orderClick}>Order</button>
                            </div>
                        </>
                    )
                }
            </form>

        </Container>
    );
};

export default Checkout;