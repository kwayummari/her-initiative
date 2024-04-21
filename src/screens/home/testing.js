import React from 'react';
import './SquareWithCircles.css';

const SquareWithCircles = () => {
  return (
    <div className="container">
      <div className="square"></div>
      <div className="circle top-left"></div>
      <div className="circle top-right"></div>
      <div className="circle bottom-left"></div>
      <div className="circle bottom-right"></div>
      <div className="circle center"></div>
      <div className="diagonal top-left-bottom-right"></div>
      <div className="diagonal top-right-bottom-left"></div>
    </div>
  );
};

export default SquareWithCircles;
