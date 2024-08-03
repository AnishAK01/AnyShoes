import React from 'react';
import styled from 'styled-components';
import ContinuousSlider from './Slider'



const Container = styled.div`
    display: flex;
border-radius: 20px;
box-shadow: 1px 3px 15px #3d52a0;
 
    align-items: center;
    text-align: center;
    height: 480px;
    justify-content: space-around;
    width: 100%;
/* border: 5px solid yellow; */
background: rgb(173,187,218);
background: linear-gradient(341deg, rgba(173,187,218,1) 29%, rgba(112,145,230,1) 87%);

`
const Details = styled.div`
width: 40%;
padding: 20px;
color: #000043;
font-size: 30px;
h1{
    font-size: 3rem;
    
}
div{
        font-size: 1.6rem;
    }
`

function Carousel(props) {
    return (
        <Container>
            
            <ContinuousSlider  />
            <Details>
              <h1>SHOES</h1>
              <div>
            
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quasi accusamus illo, voluptate laborum eius quod. Voluptas modi quo eum autem quasi assumenda veniam unde odio, nulla totam rem dolorem!
               
              </div>
            </Details>
                
            
        </Container>
    );
}

export default Carousel;