import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

const DatePickerComponent = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // New state for phone number
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => setStartDate(date);
  const handleEndDateChange = (date) => setEndDate(date);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value); // Update phone number

  const handleSubmit = () => {
    if (!startDate || !endDate || !email || !phone) {
      alert('Please select dates, enter your email, and phone number.');
      return;
    }

    const formattedStartDate = startDate.toLocaleDateString();
    const formattedEndDate = endDate.toLocaleDateString();

    emailjs
      .send(
        'service_fbmgmvr', 
        'template_py3p9lz', 
        {
          formattedStartDate: formattedStartDate,
          formattedEndDate: formattedEndDate,
          email: email,
          phone: phone, // Include phone in the email template
        },
        'rCwhpMLQgSUCf-QJ9'
      )
      .then(
        (result) => {
          if (result.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Your request has been sent successfully!',
            });
            setStartDate(null);
            setEndDate(null);
            setEmail('');
            setPhone(''); // Clear phone number
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again.',
          });
        }
      );
  };

  return (
    <div className="date-picker-container">
      <h3>Select a Date Range:</h3>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsStart
        dateFormat="MMMM d, yyyy"
        placeholderText="Select start date"
        className="date-picker-input"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsEnd
        minDate={startDate}
        dateFormat="MMMM d, yyyy"
        placeholderText="Select end date"
        className="date-picker-input"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className="email-input"
      />
      <input
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Enter phone number"
        className="phone-input"
      />
      <button onClick={handleSubmit} className="submit-btn">
        Request Date
      </button>
    </div>
  );
};

export default DatePickerComponent;



