import React from 'react';
import IButton from './IButton';

const CustomButton: React.FC<IButton> = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
