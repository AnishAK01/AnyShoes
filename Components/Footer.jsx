import React from 'react';
import styled from 'styled-components';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import EmailIcon from '@mui/icons-material/Email';


const Container = styled.div`
    /* border: 2px solid black; */
    background-color: #031248;
    color: aliceblue;
height: 200px;
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 2px;
`
const Side1 = styled.div`
    /* border: 2px solid black; */
    width: 40%;
    height: 90%;

   
`
const Side2 = styled.div`
    /* border: 2px solid black; */
    width: 40%;
    height: 90%;
    display: flex;
justify-content: space-evenly;
align-items: center;

    div{
        border: 0.5px solid #e7cbed;
    width: 35%;
    height: 80%;
    background-color: #001e8b;
    display: flex;
    flex-direction: column;
justify-content: space-evenly;
align-items: center;
box-shadow: rgba(254, 229, 181, 0.08) 20px 20px 0px 0px
;
border-radius:20px 0px;
    }
`
const Icon = styled.span`
       /* border: 2px solid blue; */
    width: auto;
    height: auto;
  
`
const styleMenu = {
    fontSize: "40px"
}

const Footer = () => {
    return (
       <Container>
        <Side1>
            <h1>Get in Touch</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque temporibus molestiae ducimus 
        </Side1>
        <Side2>
            <div>
               <Icon>
               <LocalPhoneSharpIcon style={styleMenu} />
                </Icon>
               +91 98654*****
            </div>
            <div>
            <Icon>
               <EmailIcon style={styleMenu} />
                </Icon>
                somethingreal786 <br /> @gmail.com
            </div>
        </Side2>
       </Container>
    );
};

export default Footer;