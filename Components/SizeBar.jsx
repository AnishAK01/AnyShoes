import React from 'react';
import styled from 'styled-components';


const  SizeOptions = styled.div`
    display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;

  label {
    margin: 0 10px;
    cursor: pointer;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"] + span {
    padding: 5px 10px;
    border: 2px solid black;
    border-radius: 5px;
  }
  input[type="radio"]:checked + span {
    background-color:black;
    
    color: white;
  }
`


const SizeBar = ({selectedSize, onSizeChange}) => {

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
      };

    return (
        <SizeOptions>
        <label>
          <input
            type="radio"
            value="S"
            checked={selectedSize === 'S'}
            onChange={() => onSizeChange('S')}
          />
          <span>S</span>
        </label>
        <label>
          <input
            type="radio"
            value="M"
            checked={selectedSize === 'M'}
            onChange={() => onSizeChange('M')}
          />
          <span>M</span>
        </label>
        <label>
          <input
            type="radio"
            value="L"
            checked={selectedSize === 'L'}
            onChange={() => onSizeChange('L')}
          />
          <span>L</span>
        </label>
        <label>
          <input
            type="radio"
            value="XL"
            checked={selectedSize === 'XL'}
            onChange={() => onSizeChange('XL')}
          />
          <span>XL</span>
        </label>
      </SizeOptions>
    );
};

export default SizeBar;