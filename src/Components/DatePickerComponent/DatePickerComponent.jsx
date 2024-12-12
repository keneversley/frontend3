import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // Import Swal for SweetAlert2
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import './DatePicker.css'; // Your custom CSS for the DatePicker

const DatePickerComponent = () => {
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => setStartDate(date);
  const handleEndDateChange = (date) => setEndDate(date);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = () => {
    if (!startDate || !endDate || !email) {
      alert('Please select both start and end dates and enter your email.');
      return;
    }

    const formattedStartDate = startDate.toLocaleDateString();
    const formattedEndDate = endDate.toLocaleDateString();

    emailjs
      .send(
        'service_fbmgmvr', // Service ID
        'template_py3p9lz', // Template ID
        {
          formattedStartDate: formattedStartDate,
          formattedEndDate: formattedEndDate,
          email: email,
        },
        'rCwhpMLQgSUCf-QJ9' // API key
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
          }
        },
        (error) => {
          console.error('Error sending email:', error.text);
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
      <button onClick={handleSubmit} className="submit-btn">
        Request Date
      </button>
    </div>
  );
};

export default DatePickerComponent;



