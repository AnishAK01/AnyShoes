import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: "#3d52a0",
    color: "white"
    
  },
}));
const styleMenu = {
    fontSize: "40px",
    //  color: "#66fcf1"
}
export default function CustomizedBadges({size}) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge  badgeContent={size} color="primary">
       <LocalMallRoundedIcon style={styleMenu}/>
      </StyledBadge>
    </IconButton>
  );
}
