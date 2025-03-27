import React from 'react';
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="button-group">
          <Link to="/signup">
            <button className="create-btn">Create Account</button>
          </Link>
          <Link to="/login">
            <button className="login-btn">Already Registered? Login</button>
          </Link>
        </div>
      </div>

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
            display: flex;
            align-items: end;
            height: 100vh;
            padding: 24px;
            background-color: white;
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .content {
            width: 100%;
            text-align: center;
            animation: slideUp 1s ease-in-out;
          }

          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .title {
            font-size: 24px;
            font-weight: bold;
            animation: popUp 1s ease-in-out;
          }

          @keyframes popUp {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          .subtitle {
            color: gray;
            margin-top: 8px;
            animation: fadeIn 1s ease-in-out 0.5s forwards;
            opacity: 0;
          }

          .button-group {
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            animation: fadeIn 1s ease-in-out 0.7s forwards;
            opacity: 0;
          }

          .create-btn, .login-btn {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            font-weight: 500;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          }

          .create-btn {
            background-color: #6b46c1;
            color: white;
            box-shadow: 0 4px 10px rgba(107, 70, 193, 0.3);
          }

          .login-btn {
            background-color: #e9d8fd;
            color: #6b46c1;
            box-shadow: 0 4px 10px rgba(233, 216, 253, 0.3);
          }

          .create-btn:hover, .login-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          }

          .create-btn:active, .login-btn:active {
            transform: scale(0.98);
          }
        `}
      </style>
    </div>
  );
};

export default WelcomeScreen;
