import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
const AboutSec = styled.div`
    text-align: center;
    display: flex;
flex-direction: column;
align-items: center;
/* background: rgb(11,12,16);
background: linear-gradient(261deg, rgba(11,12,16,1) 11%, rgba(31,40,51,1) 77%); */
/* color: #66fcf1; */
/* margin-top: 10px; */
font-size: 20px;
    h1{
    text-align: center;
    border-bottom: double #ede8f5 5px;
  
    width: 99%;
    text-align: left;
    padding: 0;
    /* margin: 5px; */
}
`
const Details = styled.div`
/* border: 2px solid black; */
text-align: center;

div{
    display: flex;
    margin: 30px;
    padding: 50px;
    p{
        color: #3d52a0;
    }
}
img{
margin: 10px;
}

`
const About = () => {
    return (
        <AboutSec className='about' id='about'>
            {/* <nav>
                <Navbar size = {cart.length}/>
            </nav> */}
            <h1 style={{  margin: "120px auto 50px 10px"}}>About</h1>
            <Details>
                <div><img src="./assets/gif1.gif" alt="" style={{ height: '250px', }} />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus, commodi expedita vel laborum blanditiis porro asperiores! Ipsa quisquam cumque neque nostrum molestias laboriosam libero, eligendi voluptas eaque distinctio rem!</p></div>


                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus, commodi expedita vel laborum blanditiis porro asperiores! Ipsa quisquam cumque neque nostrum molestias laboriosam libero, eligendi voluptas eaque distinctio rem!</p>
                    <img src="./assets/gif2.gif" alt="" style={{ height: '250px' }} />

                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus, commodi expedita vel laborum blanditiis porro asperiores! Ipsa quisquam cumque neque nostrum molestias laboriosam libero, eligendi voluptas eaque distinctio rem!</p>
                    <img src="./assets/gif3.gif" alt="" style={{ height: '250px',padding:"2px 20px 0 20px" }} />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus, commodi expedita vel laborum blanditiis porro asperiores! Ipsa quisquam cumque neque nostrum molestias laboriosam libero, eligendi voluptas eaque distinctio rem!</p>
                </div>
            </Details>
            <footer>
        <Footer/>
      </footer>
        </AboutSec>

    );
};

export default About;