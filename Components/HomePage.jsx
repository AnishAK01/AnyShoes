import React from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
import ScrollingWelcome from './ScrollingWelcome';
import Faqs from './Faqs';
import Footer from './Footer';
import Navbar from './Navbar';
import Cart from './Cart';


const Container = styled.div`
    /* border: 1.5px solid black   ; */
    position: absolute;
margin: 100px auto;
width: 98%;
height: auto;
left: 13px;
border-radius: 20px;

`

const Banner = styled.div`
/* border-bottom: 2px solid cyan; */
    height: 100px;
margin: 10px;
    overflow-x:auto;
    overflow-y: hidden;
   
    &::-webkit-scrollbar{
  display: none;
    
}
`
const Carouseldiv = styled.div`

height: 480px;
/* width: 99.6%; */
    
`


const Collection = styled.div`
   width: 100%;
   height: 360px;
    /* border: 1.5px solid black   ; */
display: flex;
justify-content: space-evenly;
margin: 50px auto;

   div{
    background-color: chartreuse;
    height: 100%;
    width: 30%;
    border: 1.5px solid black   ;
  cursor: pointer;

    p{
        background-color: #ede8f5;
        font-size: 50px;
        opacity: 0.5;
      width: 100%;
      height: 100%;
      text-align: center;
     display: flex;
     align-items: center;
     justify-content: center;
     transition:opacity  0.2s ease-in;
    }
    p:hover{
        opacity: 0;
    }
   }
 
`


const SectionFaq = styled.div`
    
`

const HomePage = () => {
    return (
        <Container>
<nav>
    {/* <Navbar /> */}
</nav>
            <Carouseldiv>
                <Carousel />
            </Carouseldiv>
            <Banner>
                <ScrollingWelcome />
            </Banner>
            <h1 style={{marginTop:"100px",background:"#8595c4",textAlign:"center"}}>Collections</h1>
    <Collection>
    
    <div
    style={{backgroundImage:"url(/assets/colec3.jpg)",backgroundSize:"cover"}}>
        <p>Best Seller</p>
    </div>
    <div style={{backgroundImage:"url(/assets/Collec1.webp)",backgroundSize:"cover"}}>
    <p>Themed <br/> &<br/> Customized</p>
    </div>
    <div style={{backgroundImage:"url(/assets/collec2.jpeg)",backgroundSize:"cover"}}>
    <p>New Arrivals</p>
    </div>
    </Collection>

       
    
      

        <SectionFaq>
        <Faqs/>
        </SectionFaq>
      <footer>
        <Footer/>
      </footer>
    </Container>


    );
};

export default HomePage;