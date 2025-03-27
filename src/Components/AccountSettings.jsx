import React from "react";
import img from '../img/Screenshot 2025-03-27 233036.png';

const AccountSettings = () => {
  return (
    <div className="container">
      <h2 className="heading">Account Settings</h2>

      <div className="profile-section">
        <img src={img} alt="Profile" className="profile-img" />
        <div className="profile-info">
          <h3 className="name">Marry Doe</h3>
          <p className="email">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
      </p>

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
            max-width: 400px;
            padding: 24px;
            background-color: white;
            border-radius: 8px;
            margin: 40px auto;
            text-align: center;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.8s ease-in-out;
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
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 16px;
            color: #333;
          }

          .profile-section {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            padding: 12px;
            border-radius: 8px;
            transition: background 0.3s ease-in-out;
          }

          .profile-section:hover {
            background: #f9f9f9;
          }

          .profile-img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease-in-out;
          }

          .profile-img:hover {
            transform: scale(1.05);
          }

          .profile-info {
            display: flex;
            flex-direction: column;
            align-items: start;
          }

          .name {
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.3s ease-in-out;
          }

          .name:hover {
            color: #7b43ff;
          }

          .email {
            font-size: 14px;
            color: gray;
            transition: color 0.3s ease-in-out;
          }

          .email:hover {
            color: #555;
          }

          .description {
            margin-top: 12px;
            font-size: 14px;
            color: #555;
            line-height: 1.5;
            padding: 8px;
          }

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

export default AccountSettings;
