import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="container">
      <h2 className="heading">Create your PopX account</h2>
      <form className="signup-form">
        <div className="form-group">
          <label>Full Name*</label>
          <input type="text" placeholder="Enter full name" />
        </div>

        <div className="form-group">
          <label>Phone Number*</label>
          <input type="text" placeholder="Enter phone number" />
        </div>

        <div className="form-group">
          <label>Email Address*</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Password*</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input type="text" placeholder="Enter company name" />
        </div>

        <div className="radio-group">
          <label>Are you an Agency?*</label>
          <div>
            <input type="radio" name="agency" id="yes" />
            <label htmlFor="yes">Yes</label>

            <input type="radio" name="agency" id="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>

        <Link to='/account-settings'><button className="submit-btn">Create Account</button></Link>
      </form>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
          
          * {
            font-family: 'Poppins', sans-serif;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          .container {
            padding: 24px;
            background-color: white;
            border-radius: 8px;
            max-width: 400px;
            margin: 40px auto;
            text-align: center;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
            animation: fadeIn 1s ease-in-out;
            transition: transform 0.3s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .container:hover {
            transform: scale(1.02);
          }

          .heading {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 20px;
            opacity: 0;
            animation: fadeSlide 1s ease-in-out 0.2s forwards;
          }

          .signup-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            opacity: 0;
            animation: fadeSlide 1s ease-in-out 0.4s forwards;
          }

          .form-group label {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5px;
            color: #333;
          }

          .form-group input {
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 14px;
            transition: box-shadow 0.3s ease-in-out;
          }

          .form-group input:focus {
            box-shadow: 0 0 10px rgba(123, 67, 255, 0.3);
            outline: none;
          }

          .radio-group {
            margin-bottom: 16px;
            opacity: 0;
            animation: fadeSlide 1s ease-in-out 0.6s forwards;
          }

          .radio-group div {
            display: flex;
            gap: 10px;
            margin-top: 5px;
          }

          .radio-group label {
            font-size: 14px;
            font-weight: bold;
          }

          .submit-btn {
            background-color: #7b43ff;
            color: white;
            font-size: 16px;
            padding: 12px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            text-align: center;
            width: 100%;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            opacity: 0;
            animation: fadeSlide 1s ease-in-out 0.8s forwards;
          }

          .submit-btn:hover {
            background-color: #6936e7;
            transform: scale(1.05);
            box-shadow: 0 4px 10px rgba(123, 67, 255, 0.3);
          }

          .submit-btn:active {
            transform: scale(0.97);
          }

          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Responsive Design */
          @media (max-width: 480px) {
            .container {
              max-width: 90%;
              padding: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoginScreen;
