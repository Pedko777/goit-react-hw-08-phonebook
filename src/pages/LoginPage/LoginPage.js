import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {authOperations} from "../../redux/auth"
import authOperations from '../../redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const handleEmailChange = ({ target }) => setEmail(target.value);

  const [password, setPassword] = useState('');
  const handlePasswordChange = ({ target }) => setPassword(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      authOperations.login({
        email: email,
        password: password,
      }),
    );
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email..."
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password..."
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit" >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
