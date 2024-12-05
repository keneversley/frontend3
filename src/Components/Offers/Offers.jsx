import React from 'react';
import './Offers.css';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';

export const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <DatePickerComponent />
      </div>
      <div className='offers-right'>
        <img src="https://globalasset1.s3.us-east-2.amazonaws.com/Mansion_chain.jpg" alt="" />
      </div>
    </div>
  );
}

export default Offers;

