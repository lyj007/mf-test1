import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/download')}>button1</button>
  )
};

export default Button;