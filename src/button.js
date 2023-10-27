import React from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css';

const Button = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/download')}>button1</button>
  )
};

export default Button;