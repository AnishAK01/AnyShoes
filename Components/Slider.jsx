


import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { useState,useRef } from 'react';

export default function ContinuousSlider() {
    const [imageIndex, setImageIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const imagesCount = 18; // Number of images
  
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setStartX(event.clientX);
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
  
      const currentX = event.clientX;
      const diffX = currentX - startX;
      const imageChange = Math.floor(diffX / 10); // Adjust sensitivity
  
      let newIndex = (imageIndex + imageChange) % imagesCount;
      if (newIndex < 0) newIndex = imagesCount + newIndex;
  
      setImageIndex(newIndex);
      setStartX(currentX); // Reset startX for smoother dragging
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const imagePaths = [];
    for (let i = 1; i <= imagesCount; i++) {
      imagePaths.push(`/assets/image360/${i}.png`);
    }
  
    return (
      <Box
        sx={{ width: 400, height: 300 }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' ,width:"60%",height: "470px" }}
      >
        <Stack style={{height: "470px"}}>
          <img 
            src={imagePaths[imageIndex]} 
            alt={`View ${imageIndex + 1}`} 
            style={{ width: '100%', height: "470px"}} 
          />
        </Stack>
      </Box>
    );
  }
