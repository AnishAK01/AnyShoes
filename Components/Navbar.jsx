import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import Home from '@mui/icons-material/Home';
import CustomizedBadges from './CartIcon';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';


const styleLink = {
    color: "black",
    textDecoration:"none"
}

const styledIcon = {
    fontSize: "70px"
}

const Container = styled.div`
 display: flex;
 border-radius: 20px;
 box-shadow: 1px 3px 5px #3d52a0;
    /* border: 1.5px solid black   ; */
    position: fixed;
    /* background-color: lightblue; */
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 98%;
   margin: 2px auto;
   left: 13px;
z-index: 3;
background-color: #ede8f5;
   div{
    height: 100%;
   }
   
`
const Left = styled.div`
    /* border: 1.5px solid black   ; */
    width: 20%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;

    h1{
        font-family:  'Courier New', Courier, monospace;
        font-size: 3rem;
        margin: 5px;
        padding: 2px;
        text-align: center;
        display: flex;
    }
    span{
        font-family:  'Courier New', Courier, monospace;
text-align: center;
        font-size: 2.4rem;
        /* margin: 5px; */
        width: 100%;
        height: 100%;
        /* padding: 2px; */
        border-bottom: 3px double;
    }
`
const Center = styled.div`
    /* border: 1.5px solid black   ; */
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-size: 1.7rem;
        border-bottom: 5px double;
    }
`
const Right = styled.div`
    /* border: 1.5px solid black   ; */
    width: 16%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Navbar = ({cart=[],size,setShow}) => {
    // const size = 5;
    return (
        <>
        <Container>
<Left>
<Link to="/" style={styleLink}>
<h1>Any <span>Shoes</span></h1>

</Link>
</Left>
<Center>
    <Link to="/" style={styleLink}>
    <Home style={styledIcon}/>
    </Link>
    
    <Link to="/about"  style={styleLink}>
    <h2>About</h2>

    </Link>
    <Link to="/shop" style={styleLink}>
    <h2>Shop</h2>
    
    </Link>
</Center>
<Right>
    <div>
        <h3 style={{borderBottom:"1px solid"}}>Login</h3>
        <h3 style={{borderTop:"1px solid"}}>Signin</h3>
    </div>
   <Link to="/cart">
   <CustomizedBadges size = {cart.length}/>
   </Link>
</Right>
        </Container>
        </>
    );
};

export default Navbar;