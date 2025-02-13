import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import logo from '../../assets/images/nikithas-logo.png';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import { Link } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigate();

  const { username, password } = login;

  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordRegex.test(password);
  };

  const navigateTo = async (token) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/pms/auth/${token}`);
      if (response.data.role === 'MANAGER') {
        navigation('/manager-dashboard');
      } else if (response.data.role === 'HR') {
        navigation('/hr-dashboard');
      } else if (response.data.role === 'EMPLOYEE') {
        navigation('/employee-dashboard');
      }
    } catch (error) {
      console.error('Error navigating:', error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      setShowModal(true);
      return;
    }

    setErrorMessage('');
    setShowModal(false);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/pms/auth/login', login);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigateTo(response.data.token);
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage('Invalid credentials. Please try again.');
      } else if (error.request) {
        setErrorMessage('Unable to connect to the server. Please check if the backend is running.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      {showModal && <Modal message={errorMessage} closeModal={closeModal} />}
      <div className="form-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>PMS</h1>
        <h3>Login</h3>
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                required
                value={username}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="links-container">
  <span>Not Registered? <Link to="/signup" className="register-link">Register</Link></span>
  <a href="/forgot-password" className="forgot-password">Forgot password?</a>
</div>

          <button type="submit">Login</button>
          
        </form>
      </div>
      <div className="image-section"></div>
      
    </div>
    
  );
};

export default Login;
